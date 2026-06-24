const User = require("../models/User");
const Job = require("../models/Job");
const Application = require("../models/Application");

exports.dashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalRecruiters = await User.countDocuments({
      role: "recruiter",
    });

    const totalCandidates = await User.countDocuments({
      role: "candidate",
    });

    const totalJobs = await Job.countDocuments();

    const totalApplications = await Application.countDocuments();

    res.json({
      totalUsers,
      totalRecruiters,
      totalCandidates,
      totalJobs,
      totalApplications,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.json(jobs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.json({
      message: "Job deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

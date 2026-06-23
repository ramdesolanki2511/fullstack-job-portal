const Application = require("../models/Application");
const Job = require("../models/Job");

exports.applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    const alreadyApplied = await Application.findOne({
      candidateId: req.user.id,
      jobId,
    });

    if (alreadyApplied) {
      return res.status(400).json({
        message: "Already Applied",
      });
    }

    const application = await Application.create({
      candidateId: req.user.id,
      jobId,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.myApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      candidateId: req.user.id,
    }).populate("jobId");

    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.jobApplicants = async (req, res) => {
  try {
    const applications = await Application.find({
      jobId: req.params.jobId,
    }).populate("candidateId", "name email");

    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      },
    );

    res.json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const User = require("../models/User");

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,

      {
        skills: req.body.skills,

        experience: req.body.experience,
      },

      {
        new: true,
      },
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.uploadResume = async (req, res) => {
  try {
    const resumeUrl = `/uploads/${req.file.path}`;

    const user = await User.findByIdAndUpdate(
      req.user.id,

      {
        resume: req.file.path,
      },

      {
        new: true,
      },
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,

    email: {
      type: String,
      unique: true,
    },

    password: String,

    role: {
      type: String,
      enum: ["admin", "recruiter", "candidate"],
      default: "candidate",
    },
    
    skills: {
      type: String,
      default: ""
    },

    experience: {
      type: String,
      default: ""
    },

    resume: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);

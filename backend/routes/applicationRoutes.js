const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const recruiter = require('../middleware/recruiter');

const {
  applyJob,
  myApplications,
  jobApplicants,
  updateApplicationStatus,
} = require("../controllers/applicationController");

router.post("/apply", auth, applyJob);

router.get("/my-applications", auth, myApplications);

router.get("/job/:jobId", auth, recruiter, jobApplicants);

router.put("/:id/status", auth, recruiter, updateApplicationStatus);

module.exports = router;

const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const recruiterMiddleware = require("../middleware/recruiter");

const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
  myJobs,
} = require("../controllers/jobController");

router.post("/", auth, createJob, recruiterMiddleware);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.put("/:id", auth, updateJob);
router.delete("/:id", auth, deleteJob);
router.get("/my-jobs", auth, myJobs);

module.exports = router;

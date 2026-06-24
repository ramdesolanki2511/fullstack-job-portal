const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const admin = require("../middleware/admin");

const {
  dashboardStats,
  getUsers,
  deleteUser,
  getAllJobs,
  deleteJob,
} = require("../controllers/adminController");

router.get("/dashboard", auth, admin, dashboardStats);
router.get("/users", auth, admin, getUsers);
router.delete("/users/:id", auth, admin, deleteUser);
router.get("/jobs", auth, admin, getAllJobs);
router.delete("/jobs/:id", auth, admin, deleteJob);

module.exports = router;

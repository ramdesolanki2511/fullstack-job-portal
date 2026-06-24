const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const upload = require("../middleware/upload");

const {
  getProfile,
  updateProfile,
  uploadResume,
} = require("../controllers/profileController");

router.get("/me", auth, getProfile);

router.put("/update", auth, updateProfile);

router.post("/resume", auth, upload.single("resume"), uploadResume);

module.exports = router;

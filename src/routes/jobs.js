const express = require("express");
const { createJob, getJobs,getJobsByUser } = require("../controllers/jobController");
const router = express.Router();

router.post("/", createJob);
router.get("/", getJobs);
router.get("/user/:username", getJobsByUser);

module.exports = router;
const express = require("express");
const { createCluster, getClusters } = require("../controllers/clusterController");
const router = express.Router();

router.post("/", createCluster);
router.get("/", getClusters);

module.exports = router;
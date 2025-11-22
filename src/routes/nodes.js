const express = require("express");
const { createNode, getNodes,getNodesByCluster } = require("../controllers/nodeController");
const router = express.Router();

router.post("/", createNode);
router.get("/", getNodes);
router.get("/cluster/:id", getNodesByCluster);
module.exports = router;
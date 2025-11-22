const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  user: String,
  type: {
    type: String,
    enum: ["simulation", "render", "machine-learning", "analysis"],
    required: true
  },
  requestedNodes: Number,
  status: {
    type: String,
    enum: ["pending", "running", "failed", "completed"],
    default: "pending"
  },
  estimatedTimeMin: Number,
  actualTimeMin: Number,
  assignedNode: { type: mongoose.Schema.Types.ObjectId, ref: "Node" }
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);

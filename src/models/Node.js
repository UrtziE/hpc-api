const mongoose = require("mongoose");

const nodeSchema = new mongoose.Schema({
  hostname: { type: String, required: true },
  // TODO: "CPU" derrigorrezkoa bihurtu
  cpus: {type:Number, required:true},
  gpus: Number,
  ramGB: Number,
  status: { type: String, enum: ["idle", "busy", "offline"], default: "idle" },
  cluster: { type: mongoose.Schema.Types.ObjectId, ref: "Cluster", required: true }
}, { timestamps: true });

module.exports = mongoose.model("Node", nodeSchema);

const mongoose = require("mongoose");

const clusterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // TODO: gehitu derrigorrezko "location" eremua, String motakoa
  location: { type:String, required:true },
  // TODO: "type" CPU, GPU edo Mixed bakarrik izan daiteke
  type: { type: String, enum: ["CPU","GPU","Mixed"], required: true },
  totalNodes: Number,
  deploymentDate: Date,
  status: {
    type: String,
    enum: ["operational", "maintenance", "down"],
    default: "operational"
  }
}, { timestamps: true });

module.exports = mongoose.model("Cluster", clusterSchema);

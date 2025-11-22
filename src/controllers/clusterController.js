const Cluster = require("../models/Cluster");

const createCluster = async (req, res, next) => {
  try {
    const created = await Cluster.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

const getClusters = async (req, res, next) => {
  try {
    // TODO: kluster guztiak lortu Mongoose erabiliz
    const data = await Cluster.find();

    res.json(data);
  } catch (err) {

    next(err);
  }
};
module.exports = { createCluster, getClusters };
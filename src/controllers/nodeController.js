const Node = require("../models/Node");

const createNode = async (req, res, next) => {
  try {

    // TODO: nodo berri bat gehitu
    const created = await Node.create(req.body)
        res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

const getNodes = async (req, res, next) => {  try {
    const data = await Node.find().populate("cluster");
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const getNodesByCluster = async (req, res, next) => {
    try {
        const clusterId = req.params.id;

        const data= await Node.find({cluster:clusterId}).populate("cluster");

// TODO: cluster == clusterId duten nodoak bilatu: filtroa populate
        res.json(data);
    } catch (err) {

        next(err);
    }
};
module.exports = { createNode, getNodes, getNodesByCluster };


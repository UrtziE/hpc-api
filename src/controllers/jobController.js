const Job = require("../models/Job");

const createJob = async (req, res, next) => {
  try {
    const created = await Job.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

const getJobs = async (req, res, next) => {
  try {
    const data = await Job.find().populate("assignedNode");
    res.json(data);
  } catch (err) {
    next(err);
  }
};
const getJobsByUser = async (req, res, next) => {
    try {
        const username =  req.params.username;
        const data= await Job.find({user: username}).populate("assignedNode");

// TODO: bilatu "user" eremua bat datozen lan guztiak
// TODO: "assignedNode"-ko populate egin
        res.json(data);
    } catch (err) {
        next(err);
    }
};

module.exports = { createJob, getJobs,getJobsByUser };
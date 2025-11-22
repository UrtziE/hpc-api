require("dotenv").config();
const connectDB = require("../config/database");
const Cluster = require("../models/Cluster");
const Node = require("../models/Node");
const Job = require("../models/Job");

const locations = ["Madrid", "Barcelona", "Seville", "Donostia", "Bilbao"];
const clusterTypes = ["CPU", "GPU", "Mixed"];
const jobTypes = ["simulation", "render", "machine-learning", "analysis"];

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const generateClusters = count =>
    Array.from({ length: count }).map((_, i) => ({
        name: `Cluster-${i}`,
        location: random(locations),
        type: random(clusterTypes),
        totalNodes: Math.floor(Math.random() * 50) + 10,
        deploymentDate: new Date(2015 + Math.random() * 10, 1, 1)
    }));

const generateNodes = (clusters, count) =>
    Array.from({ length: count }).map((_, i) => ({
        hostname: `node-${i}`,
        cpus: Math.floor(Math.random() * 64) + 8,
        gpus: Math.floor(Math.random() * 8),
        ramGB: Math.floor(Math.random() * 512) + 32,
        cluster: random(clusters)._id
    }));

const generateJobs = (nodes, count) =>
    Array.from({ length: count }).map(() => ({
        user: `user${Math.floor(Math.random() * 50)}`,
        type: random(jobTypes),
        requestedNodes: Math.floor(Math.random() * 4) + 1,
        assignedNode: random(nodes)._id
    }));

const seed = async () => {
    await connectDB();

    await Cluster.deleteMany();
    await Node.deleteMany();
    await Job.deleteMany();

    const clusters = await Cluster.insertMany(generateClusters(10));
    const nodes = await Node.insertMany(generateNodes(clusters, 100));
    await Job.insertMany(generateJobs(nodes, 200));

    console.log("HPC seed completed");
    process.exit();
};

seed();

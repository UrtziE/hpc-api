require("dotenv").config();
const express = require("express");
const connectDB  = require("./config/database");
const clusterRoutes = require("./routes/clusters");
const nodeRoutes = require("./routes/nodes");
const jobRoutes = require("./routes/jobs");
const errorHandler  = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

app.use("/clusters", clusterRoutes);
app.use("/nodes", nodeRoutes);
app.use("/jobs", jobRoutes);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(3000, () => console.log("HPC server running on port 3000"));
});


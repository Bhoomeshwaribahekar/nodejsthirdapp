const express = require("express");
const mongoose = require("mongoose");
const route = require("./route/route");
const collegeRoute = require("./route/collegeRoute");
const studentRoute = require("./route/studentRoute");

mongoose
  .connect("mongodb://127.0.0.1:27017/populate", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
const app = express();
const port = 3000;
app.use(express.json());
app.use(route);
app.use("/", collegeRoute);
app.use("/right", studentRoute);

// app.use("/api",router);

app.listen(port, () => {
  console.log(`connection successfully ${port}`);
});

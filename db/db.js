// // // const mongoose = require("mongoose");

// // // mongoose
// // //   .connect("mongodb://localhost:27017/olymics",{
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true
// // //   })
// // //   .then(() => {
// // //     console.log("connection successful");
// // //   })
// // //   .catch((e) => {

// // //     console.log("No connection",e);
// // //   });

// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/sonu", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch(err => {
//     console.log("Could not connect");
//   });
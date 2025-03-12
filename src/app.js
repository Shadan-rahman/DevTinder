const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Shadan", lastName: "Rahman" });
});

app.post("/user", (req, res) => {
  res.send("Data Saved Successfully in Database");
});

app.delete("/user", (req, res) => {
  res.send(" Data deleted Successfully");
});

// app.use("/hello", (req, res) => {
//   res.send("hello hello hello ");
// });

// app.use("/test", (req, res) => {
//   res.send("hello from the test");
// });

// app.use("/", (req, res) => {
//   res.send("hello from the server");
// });

app.listen(3000, () => {
  console.log("Server is started runing successfully");
});

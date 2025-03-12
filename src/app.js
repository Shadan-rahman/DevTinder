const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("hello hello hello ");
});

app.use("/", (req, res) => {
  res.send("hello from the server");
});

app.use("/test", (req, res) => {
  res.send("hello from the test");
});

app.listen(3000, () => {
  console.log("Server is started runing successfully");
});

const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Shadan",
    lastName: "Rahman",
    emailId: "shadanrahman2@gmail.com",
    password: "shadan123",
  });

  try {
    await user.save();
    res.send("User Added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connect is succesfully established");
    app.listen(3000, () => {
      console.log("Server is started runing successfully");
    });
  })
  .catch((err) => {
    console.error("Connection is not established");
  });

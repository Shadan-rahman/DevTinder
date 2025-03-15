const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const user = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User Added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user" + err.message);
  }
});

app.get("/user", async (req, res) => {
  //getting user from body
  const userEmail = req.body.emailId;
  try {
    const users = await User.findOne({ emailId: userEmail });
    if (users.length === 0) {
      res.status(400).send("User not found");
    } else {
      // console.log(users)
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(Users);
  } catch (err) {
    res.status(400).send("Something Went Wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const users = await User.findByIdAndDelete(userId);
    res.send("User deleted Successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;

  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
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

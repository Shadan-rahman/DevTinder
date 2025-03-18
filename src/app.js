const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const user = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const validator = require("validator");

app.use(express.json());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
// const userRouter = require("./routes/user");
// const paymentRouter = require("./routes/payment");
// const initializeSocket = require("./utils/socket");
// const chatRouter = require("./routes/chat");

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

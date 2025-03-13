const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shadanrahman:J5JxjHCQIlZdU8ub@nodejs.4zvjz.mongodb.net/DevTinder"
  );
};

module.exports = connectDB;

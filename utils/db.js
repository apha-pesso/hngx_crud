// Create database connection to MongoDB

const mongoose = require("mongoose");
require("dotenv").config();

// const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
const uri =
  "mongodb+srv://pesso:hngXnation@hngxcluster.g0hliwi.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;

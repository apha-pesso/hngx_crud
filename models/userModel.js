// Create the user model

const mongoose = require("mongoose");

// Counter model
const counterSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: "userId",
  },
  sequence_value: {
    type: Number,
    default: 0,
  },
});

const Counter = mongoose.model("Counter", counterSchema);

// User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  id: {
    type: String,
    unique: true,
  },
});

// Add a reference to the counter model
userSchema.pre("save", async function (next) {
  const user = this;
  const counter = await Counter.findOneAndUpdate(
    { _id: "userId" },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );
  user.id = counter.sequence_value;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

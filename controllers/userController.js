// User controller

const User = require("../models/userModel");
const db = require("../utils/db");

// Define the user controller functions that will be used in the routes
const userController = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a user by id
  async getUserById(req, res) {
    const id = req.params.id;
    try {
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json({ Error: "Internal server error" });
    }
  },

  // Create a new user
  async createUser(req, res) {
    const name = req.body.name;
    if (typeof name !== "string") {
      return res.status(400).json({ Error: "Name must be a string" });
    }

    if (!name) {
      return res.status(400).json({ Error: "Name is required" });
    }

    try {
      // check if user exists
      const user = await User.findOne({ name });
      //   const user = db.users.find((user) => user.name === name);

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const newUser = new User({ name });

      await newUser.save();

      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a user by id
  async updateUser(req, res) {
    const id = req.params.id;
    const name = req.body.name;

    if (!name) {
      return res.status(400).json({ msg: "Name is required" });
    }

    if (typeof name !== "string") {
      return res.status(400).json({ Error: "Name must be a string" });
    }

    try {
      // get user and update
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );
      res.status(201).json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: "User not found" });
    }
  },

  // Delete a user by id
  async deleteUser(req, res) {
    const id = req.params.id;
    try {
      // const user = await User.findByIdAndDelete(id);
      const user = await User.findOneAndDelete({ _id: id });

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;

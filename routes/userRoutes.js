// User routes

const router = require("express").Router();
const User = require("../models/userModel");
const userController = require("../controllers/userController");

// Get all users
router.get("/users", userController.getAllUsers);

// Get a user by id
router.get("/:id", userController.getUserById);

// Create a new user
router.post("", userController.createUser);

// Update a user by id
router.put("/:id", userController.updateUser);

// Delete a user by id
router.delete("/:id", userController.deleteUser);

module.exports = router;

// Entry point for the server

const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");

app.use("/api", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

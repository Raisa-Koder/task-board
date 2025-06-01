require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db');
const boardRoutes = require("./routes/boards");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/boards', boardRoutes);
app.use('/api/tasks', taskRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ server running at http://localhost:${PORT}`);
});

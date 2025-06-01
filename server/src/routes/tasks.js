const express = require("express");
const router = express.Router();
const { createTask, getTaskById, updateTask, deleteTask } = require("../controllers/taskController");

router
    .post("/", createTask)
    .get("/:id", getTaskById)
    .put("/:taskId", updateTask)
    .delete("/:taskId", deleteTask);

module.exports = router;

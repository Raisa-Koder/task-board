const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router
  .post("/", taskController.createTask)
  .put("/:taskId", taskController.updateTask)
  .delete("/:taskId", taskController.deleteTask);

module.exports = router;

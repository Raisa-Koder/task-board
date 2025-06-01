const mongoose = require("mongoose");
const Task = require("../models/Task");
const Board = require("../models/Board")

exports.createTask = async (taskData) => {
    // If no name provided, assign default
    if (!taskData.name) {
        taskData.name = "New Task";
    }
    const task = new Task(taskData);
    await task.save();

    // Update the Board to include this task
    const boardId = mongoose.Types.ObjectId.createFromHexString(taskData.boardId);
    await Board.findByIdAndUpdate(boardId, {
        $push: { tasks: task._id },
    });
    return task;
};

exports.getTaskById = async (taskId) => {
    return await Task.findById(taskId);
};

exports.updateTask = async (taskId, updates) => {
    return await Task.findByIdAndUpdate(taskId, updates, { new: true });
}

exports.deleteTask = async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
}
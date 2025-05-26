const Task = require("../models/Task");
const task = require("../models/Task");

exports.createTask = async (data) => {
    const task = new Task(data);
    return await task.save();
}

exports.updateTask = async (taskId, updates) => {
    return await Task.findByIdAndUpdate(taskId, updates, { new: true });
}

exports.deleteTask = async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
}
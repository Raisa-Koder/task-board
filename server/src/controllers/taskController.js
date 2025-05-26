const taskServices = require("../services/taskServices");

exports.createTask = async (req, res) => {
    try {
        const task = await taskServices.createTask(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await taskServices.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await taskServices.updateTask(req.params.taskId, req.body);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const task = await taskServices.deleteTask(req.params.taskId);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
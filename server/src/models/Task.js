const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task name is required"],
    trim: true,
    minlength: 3,
    maxlength: 100,
  },
  description: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["In Progress", "Completed", "Won't Do"],
    default: "In Progress",
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);

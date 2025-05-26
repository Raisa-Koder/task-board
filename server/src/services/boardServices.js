const Board = require("../models/Board");
const Task = require("../models/Task");

exports.createBoard = async (name = "Untitled Board", description = "") => {
  const board = new Board({ name, description });
  await board.save();

  const defaultTasks = [
    { title: "Task In Progress", status: "In Progress", board: board._id },
    { title: "Task Completed", status: "Completed", board: board._id },
    { title: "Task Won't Do", status: "Won't Do", board: board._id },
    { title: "New Task", status: "In Progress", board: board._id },
  ];

  const tasks = await Task.insertMany(defaultTasks);

  board.tasks = tasks.map((t) => t._id);
  await board.save();

  return board;
};

exports.getBoardById = async (id) => {
  return Board.findById(id).populate("tasks");
};

exports.updateBoard = async (id, updateData) => {
  return Board.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteBoard = async (id) => {
  const board = await Board.findById(id);
  if (!board) throw new Error("Board not found");
  await Task.deleteMany({ board: id });
  await board.deleteOne();
};

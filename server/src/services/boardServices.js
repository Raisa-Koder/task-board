const Board = require("../models/Board");
const Task = require("../models/Task");

exports.createBoard = async (name = "Untitled Board", description = "") => {
  // Step 1: Create a new board
  const board = new Board(boardData);
  await board.save();

  // Step 2: Define default tasks
  const defaultTasks = [
    { name: "Task in Progress", status: "In Progress", boardId: board._id },
    { name: "Task Completed", status: "Completed", boardId: board._id },
    { name: "Task Won't Do", status: "Won't Do", boardId: board._id },
    { name: "Default Task", status: "In Progress", boardId: board._id },
  ];

  // Step 3: Insert default tasks
  const createdTasks = await Task.insertMany(defaultTasks);

  // Step 4: Push the task IDs into the board
  board.tasks.push(...createdTasks.map((task) => task._id));
  await board.save();

  return await board.populate("tasks");
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

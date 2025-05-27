const express = require("express");
const router = express.Router();
const { createBoard, getBoardById, updateBoard, deleteBoard } = require("../controllers/boardController");

router
    .post("/", createBoard)
    .get("/:id", getBoardById)
    .put("/:id", updateBoard)
    .delete("/:id", deleteBoard);

module.exports = router;

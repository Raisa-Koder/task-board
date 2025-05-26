const express = require("express");
const router = express.Router();
const boardController = require("../controllers/boardController");

router
    .post("/", boardController.createBoard)
    .get("/:id", boardController.getBoard)
    .put("/:id", boardController.updateBoard)
    .delete("/:id", boardController.deleteBoard);

module.exports = router;

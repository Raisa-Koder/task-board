const { getBoardById, createBoard, updateBoard, deleteBoard } = require("../services/boardServices");

// Get board by ID
exports.getBoardById = async (req, res) => {
    try {
        const board = await getBoardById(req.params.id);
        if (!board) return res.status(404).json({ message: "Board not found" });
        res.status(200).json(board);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// Create a new board
exports.createBoard = async (req, res) => {
    try {
        const board = await createBoard(req.body);
        res.status(201).json(board);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Update board
exports.updateBoard = async (req, res) => {
    try {
        const board = await updateBoard(req.params.id, req.body);
        if (!board) res.status(200).json({ message: "Board not found" });
        res.status(200).json(board);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Delete board
exports.deleteBoard = async (req, res) => {
    try {
        const board = await deleteBoard(req.params.id);
        if (!board) return res.status(404).json({ message: "Board not found" });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
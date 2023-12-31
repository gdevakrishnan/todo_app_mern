const mongoose = require("mongoose");
const TodoModels = require("../models/TodoModels");

// Create todo - POST
const createTodo = async (req, res) => {
    const { todoData } = req.body;
    try {
        const task = await TodoModels.create(todoData);
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// Read all todos - GET
const readTodos = async (req, res) => {
    try {
        const task = await TodoModels.find({});
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// read a todo by Id - GET
const readTodo = async (req, res) => {
    const { id } = req.params;
    if (!(mongoose.Types.ObjectId.isValid(id))) {
        return res.status(404).json({ message: "Todo Not Found" });
    }

    try {
        const task = await TodoModels.findById(id);
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ message: "Error Found" });
    }
}

// Update a todo by Id - PATCH
const updateTodo = async (req, res) => {
    const { id } = req.params;
    if (!(mongoose.Types.ObjectId.isValid(id))) {
        return res.status(404).json({ message: "Todo Not Found" });
    }

    try {
        const task = await TodoModels.findByIdAndUpdate({
            _id: id
        }, {
            ...req.body
        })
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// Delete a todo by Id - DELETE
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    if (!(mongoose.Types.ObjectId.isValid(id))) {
        return res.status(404).json({ message: "Todo Not Found" });
    }

    try {
        const task = await TodoModels.findByIdAndDelete(id);
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({message: "Error Found"})
    }
}

module.exports = { createTodo, readTodos, readTodo, updateTodo, deleteTodo }
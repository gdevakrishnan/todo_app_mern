const mongoose = require("mongoose");
const TodoModels = require("../models/TodoModels");

// Create todo - POST
const createTodo = async (req, res) => {
    const { todo } = req.body;
    console.log("I got the request " + todo);
    try {
        const task = await TodoModels.create({ todo });
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({error: e.message});
    }
}

// Read all todos - GET
const readTodos = async (req, res) => {
    try {
        const task = await TodoModels.find({});
        res.status(200).json(task);
    }   catch (e) {
        res.status(400).json({error: e.message});
    }
}

// read a todo by Id - GET
const readTodo = async (req, res) => {
    const { id } = req.params;
    if (!(mongoose.Types.ObjectId.isValid(id))) {
        return res.status(404).json({message: "Todo Not Found"});
    }

    try {
        const task = await TodoModels.findById(id);
        res.status(200).json(task);
    }   catch (e) {
        res.status(400).json({message: "Error Found"});
    }
}

module.exports = { createTodo, readTodos, readTodo }
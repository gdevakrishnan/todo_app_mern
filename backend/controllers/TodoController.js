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

module.exports = { createTodo }
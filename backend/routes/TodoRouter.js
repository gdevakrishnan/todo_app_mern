const { createTodo, readTodos, readTodo, updateTodo } = require("../controllers/TodoController");
const express = require('express');
const router = express.Router();

router.post('/', createTodo);
router.get('/', readTodos);
router.get('/:id', readTodo);
router.patch('/:id', updateTodo);

module.exports = ("TodoRouter", router);
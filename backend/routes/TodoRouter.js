const { createTodo, readTodos, readTodo, updateTodo, deleteTodo } = require("../controllers/TodoController");
const express = require('express');
const router = express.Router();

router.post('/', createTodo);
router.get('/', readTodos);
router.get('/:id', readTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = ("TodoRouter", router);
const { createTodo, readTodos, readTodo } = require("../controllers/TodoController");
const express = require('express');
const router = express.Router();

router.post('/', createTodo);
router.get('/', readTodos);
router.get('/:id', readTodo);

module.exports = ("TodoRouter", router);
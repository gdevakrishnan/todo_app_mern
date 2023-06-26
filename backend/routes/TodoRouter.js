const { createTodo } = require("../controllers/TodoController");
const express = require('express');
const router = express.Router();

router.post('/', createTodo);

module.exports = ("TodoRouter", router);
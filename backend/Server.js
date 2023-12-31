const express = require('express');
const { default: mongoose } = require('mongoose');
const TodoRouter = require('./routes/TodoRouter');
const app = express();
const cors = require('cors');

// Proper way to connect cors and express.json without error
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { MONGO_URI } = process.env;

// Mongodb connection and server listening
mongoose
    .connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`The database was connected sucessfully\nThe Server was running in: http://localhost:${PORT}`);
        })
    }).catch((e) => console.log(e.message));
app.use('/api/todo', TodoRouter);

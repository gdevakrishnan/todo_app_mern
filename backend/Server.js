const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { MONGO_URI } = process.env;

mongoose
    .connect (MONGO_URI)
    .then (() => {
        app.listen(PORT, () => {
            console.log(`The database was connected sucessfully\nThe Server was running in: http://localhost:${PORT}`);
        })
    }).catch ((e) => console.log(e.message));
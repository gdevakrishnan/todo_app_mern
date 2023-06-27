const { default: mongoose, Schema } = require("mongoose");

const TodoModels = new Schema (
    {
        todo: {
            type: String,
            require: true
        },
        status: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true }
);

module.exports = mongoose.model('TodoModels', TodoModels, "todos");
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thought: {type: String, require: true},
})


const Thought = module('thought', thoughtSchema);

module.exports = Thought;
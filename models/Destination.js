const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
    city: String,
    country: String,
    clues: [String],
    fun_fact: [String],
    trivia: [String],
    wrong_answers: [String]
});

module.exports = mongoose.model('Destination', DestinationSchema);
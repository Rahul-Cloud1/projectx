const mongoose = require('mongoose');

const advisorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    cropType: String,
    soilType: String,
    landSize: String,
    query: String,
    suggestions: String
});

module.exports = mongoose.model('Advisory', advisorySchema);
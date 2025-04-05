const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
    title: String,
    equipmentType: String,
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: String,
    pricePerDay: Number,
    isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Rental', rentalSchema);
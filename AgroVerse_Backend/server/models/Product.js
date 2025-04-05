const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    stock: Number,
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: String,
    images: [String]
});

module.exports = mongoose.model('Product', productSchema);
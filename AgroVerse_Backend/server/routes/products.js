const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all products with pagination, search, and filtering
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '', category, minPrice, maxPrice } = req.query;

        const query = {};

        // Search by name or description
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ];
        }

        // Filter by category
        if (category) {
            query.category = category;
        }

        // Filter by price range
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = parseFloat(minPrice);
            if (maxPrice) query.price.$lte = parseFloat(maxPrice);
        }

        const products = await Product.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Product.countDocuments(query);

        res.json({
            total,
            page: parseInt(page),
            limit: parseInt(limit),
            products,
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Add new product (Vendor/Admin only)
router.post('/', auth, async (req, res) => {
    if (req.user.role !== 'vendor' && req.user.role !== 'admin')
        return res.status(403).json({ message: 'Unauthorized' });

    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

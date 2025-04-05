const express = require('express');
const Rental = require('../models/Rental');
const auth = require('../middleware/auth');
const router = express.Router();

// Get available rentals
router.get('/', async (req, res) => {
    const rentals = await Rental.find({ isAvailable: true });
    res.json(rentals);
});

// Add rental (Owner)
router.post('/', auth, async (req, res) => {
    if (req.user.role !== 'vendor' && req.user.role !== 'admin')
        return res.status(403).json({ message: 'Unauthorized' });
    try {
        const rental = new Rental({ ...req.body, ownerId: req.user.id });
        await rental.save();
        res.status(201).json(rental);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
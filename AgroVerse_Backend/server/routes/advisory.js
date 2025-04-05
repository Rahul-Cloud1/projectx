const express = require('express');
const Advisory = require('../models/Advisory');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
    try {
        const { cropType, soilType, landSize, query } = req.body;
        const suggestions = `Suggested practice for ${cropType} on ${soilType} soil for ${landSize} land.`;
        const advisory = new Advisory({
            userId: req.user.id, cropType, soilType, landSize, query, suggestions
        });
        await advisory.save();
        res.status(201).json(advisory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', auth, async (req, res) => {
    const records = await Advisory.find({ userId: req.user.id });
    res.json(records);
});

module.exports = router;
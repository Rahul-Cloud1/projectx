const express = require('express');
const auth = require('../middleware/auth');
const Wishlist = require('../models/Wishlist');
const router = express.Router();

// Get user's wishlist
router.get('/', auth, async (req, res) => {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate('items');
    res.json(wishlist || { items: [] });
});

// Add to wishlist
router.post('/', auth, async (req, res) => {
    const { productId } = req.body;

    let wishlist = await Wishlist.findOne({ user: req.user.id });

    if (!wishlist) {
        wishlist = new Wishlist({ user: req.user.id, items: [] });
    }

    if (!wishlist.items.includes(productId)) {
        wishlist.items.push(productId);
        await wishlist.save();
    }

    res.json(wishlist);
});

// Remove from wishlist
router.delete('/:productId', auth, async (req, res) => {
    let wishlist = await Wishlist.findOne({ user: req.user.id });

    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });

    wishlist.items = wishlist.items.filter(item => item.toString() !== req.params.productId);
    await wishlist.save();
    res.json(wishlist);
});

module.exports = router;

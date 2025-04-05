const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/auth');
const router = express.Router();

// Place new order
router.post('/', auth, async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    const newOrder = new Order({
      user: req.user.id,
      items,
      totalAmount
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get current user's orders
router.get('/my-orders', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(orders);
});

// Admin - Get all orders
router.get('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });

  const orders = await Order.find().populate('user items.product');
  res.json(orders);
});

// Admin - Update order status
router.put('/:id/status', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });

  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  ).populate('user items.product');

  res.json(order);
});

module.exports = router;

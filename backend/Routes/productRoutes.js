const express = require('express');
const router = express.Router();
const Product = require('../Model/productSchema');

// CREATE product
router.post('/', async (req, res) => {
  try {
    const data = await Product.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all products
router.get('/', async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE product by ID
router.put('/:id', async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // res.json(data);
    res.json({ message: 'Successfully updated your Products.', data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE product by ID
router.delete('/:id', async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted', data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


const express = require('express');
const router = express.Router();
const Contact = require('../Model/contactSchema');

// @route   POST /api/contact/submit
// @desc    Save a new contact message
router.post('/submit', async (req, res) => {
  try {
    console.log("Incoming Data:", req.body);
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();
    console.log("Saved Successfully");

    res.status(201).json({ message: 'Contact message saved successfully!' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

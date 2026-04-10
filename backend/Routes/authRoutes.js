const express = require('express');
const router = express.Router();
const User = require('../Model/userSchema');

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, birthday } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "Username already taken" });

    const existingEmail = await User.findOne({ email });
    if (existingEmail) return res.status(400).json({ error: "Email already registered" });

    const newUser = new User({ username, email, password, birthday });
    await newUser.save();

    res.json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user: { username: user.username, email: user.email, birthday: user.birthday } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

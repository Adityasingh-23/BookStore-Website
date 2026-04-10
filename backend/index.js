const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const productRoutes = require('./Routes/productRoutes');
const authRoutes = require("./Routes/authRoutes");
const contactRoutes = require("./Routes/contactRoutes");

app.use('/api/bookdata', productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// ✅ FIXED CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/BookStore')
  .then(() => console.log('✅ Database connected'))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server is running on port 5000'));
// const mongoose= require('mongoose');
// const productSchema=new mongoose.Schema({
//     title: String,
//     price: Number

// });
// module.exports= mongoose.model('product',productSchema);

//------------------

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  author: String,
  description: String,
  image: String
}, {
  collection: 'bookdata'  // 👈 Custom collection name here
});

module.exports = mongoose.model('Product', productSchema);

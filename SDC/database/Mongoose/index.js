const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousel',  { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database')
});

const productSchema = new mongoose.Schema({
  id: Number,
  productName: String,
  type: String,
  imageDefault: String,
  images: [],
  colors: [{name: String, url: String, image: String}],
  price: Number,
  gallery: []
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
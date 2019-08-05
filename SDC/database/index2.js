const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdcCollection', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

const productSchema = new mongoose.Schema({
  id: Number,
  productName: String,
  imageDefault: String,
  images: [String],
  colors: [{name: String, url: String, image: String},],
  price: Number,
  gallery: [String]
});

const hello = mongoose.model('sdc', productSchema);

module.exports = hello;
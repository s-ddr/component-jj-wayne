// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('sdc_sequelize', 'root', '', {
//   host: 'localhost',
//   dialect: 'postgres'
// })

// sequelize.authenticate()
// .then(() => { console.log('database is connected') })
// .catch((error) => { console.log(`db failed to connect ${error}`)});

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   imageDefault: {
//     type: Sequelize.STRING
//   },
//   images: {
//     type: Sequelize.STRING
//   },
//   colorsUrl: {
//     type: Sequelize.STRING
//   },
//   colorsImage: {
//     type: Sequelize.STRING
//   },
//   price: {
//     type: Sequelize.INTEGER
//   },
//   gallery: {
//     type: Sequelize.STRING
//   }
// }, { timestamps: false });

// const Types = sequelize.define('type', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   types: {
//     type: Sequelize.ENUM("Rugs", "Counter Stools", "Kitchen Furniture", "Coffee Tables", "Bookshelfs", "Sofas", "Dining Room Tables", "Living Room Chairs")
//   }
// }, { timestamps: false});

// const Color = sequelize.define('color', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   names: {
//     type: Sequelize.STRING
//   } 
// }, { timestamps: false });

// module.exports = { Product, Type, Color };

// /*
// function DataTemplate(id) {
//   this.productName = ['auburn chair', "viv swivel chair", "Andes Terminal Chaise Sectional", "Ryder Leather Chair", "Ruby Slipper Chair", "Silhouette Pedestal Dining Table", "Mid-Century Leather Show Wood Chair", "Carlo Leather Mid-Century Chair", "Cozy Swivel Chair", "Tripod Dining Table", "Streamline Bookshelf - Whitewashed Mango Wood", "Industrial Storage Pop-Up Coffee Table", "Delphine Buffet", "Woven Leather Barstool", "Gold Dipped Barstool", "Cord Stripe Indoor/Outdoor Rug", "Vines Wool Rug", "Beacon Rug", "Cozy Plush Rug"][Math.floor(Math.random() * 18)];
//   this.type = ["Rugs", "Counter Stools", "Kitchen Furniture", "Coffee Tables", "Bookshelfs", "Sofas", "Dining Room Tables", "Living Room Chairs"][Math.floor(Math.random() * 8)];
//   this.imageDefault = ["http://carousel-we.s3-us-west-1.amazonaws.com/00/00.jpg", `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-00-default.jpg`, "http://carousel-we.s3-us-west-1.amazonaws.com/02/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/03/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/04/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/05/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/06/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/07/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/08/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/09/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/10/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/11/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/12/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/13/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/14/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/15/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/16/00.jpg"];
//   this.images = ["http://carousel-we.s3-us-west-1.amazonaws.com/17/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/17/01-neutral-image.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/17/02.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/17/03.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/17/04.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/17/05-lagoon-image.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/17/06.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/17/07.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/18/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/18/01.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/18/02.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/18/03.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/18/04-bergamot-image.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/18/05-blue-image.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/18/06.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/18/07.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/01.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/02.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/03-gray-image.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/04.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/05.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/06-rose-image.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/07.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/08-white-image.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/09.jpg"];
//   this.colors = [{ "name": "Frost Gray", "url": "http://carousel-we.s3-us-west-1.amazonaws.com/19/gray.jpg", "image": "http://carousel-we.s3-us-west-1.amazonaws.com/19/03-gray-image.jpg" }, { "name": "White", "url": "http://carousel-we.s3-us-west-1.amazonaws.com/19/white.jpg", "image": "http://carousel-we.s3-us-west-1.amazonaws.com/19/08-white-image.jpg" }, { "name": "Adobe Rose", "url": "http://carousel-we.s3-us-west-1.amazonaws.com/19/rose.jpg", "image": "http://carousel-we.s3-us-west-1.amazonaws.com/19/06-rose-image.jpg" }];
//   this.price = Math.floor(Math.random() * 1000);
//   this.gatllery = ["http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery1.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery2.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery3.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery4.jpg"];
// */
const fs = require('fs');

let stream = fs.createWriteStream('./products.json');

function DataTemplate(id) {
  this.id = id;
  this.productName = ['auburn chair', "viv swivel chair", "Andes Terminal Chaise Sectional", "Ryder Leather Chair", "Ruby Slipper Chair", "Silhouette Pedestal Dining Table", "Mid-Century Leather Show Wood Chair", "Carlo Leather Mid-Century Chair", "Cozy Swivel Chair", "Tripod Dining Table", "Streamline Bookshelf - Whitewashed Mango Wood", "Industrial Storage Pop-Up Coffee Table", "Delphine Buffet", "Woven Leather Barstool", "Gold Dipped Barstool", "Cord Stripe Indoor/Outdoor Rug", "Vines Wool Rug", "Beacon Rug", "Cozy Plush Rug"][Math.floor(Math.random() * 18)];
  this.type = ["Rugs", "Counter Stools", "Kitchen Furniture", "Coffee Tables", "Bookshelfs", "Sofas", "Dining Room Tables", "Living Room Chairs"][Math.floor(Math.random() * 8)];
  this.imageDefault = ["http://carousel-we.s3-us-west-1.amazonaws.com/00/00.jpg", `http://carousel-we.s3-us-west-1.amazonaws.com/01/viv-swivel-chair-00-default.jpg`];
  this.images = ["http://carousel-we.s3-us-west-1.amazonaws.com/17/00.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/17/01-neutral-image.jpg"];
  this.colors = [{ "name": "Frost Gray", "url": "http://carousel-we.s3-us-west-1.amazonaws.com/19/gray.jpg", "image": "http://carousel-we.s3-us-west-1.amazonaws.com/19/03-gray-image.jpg" }, { "name": "White", "url": "http://carousel-we.s3-us-west-1.amazonaws.com/19/white.jpg", "image": "http://carousel-we.s3-us-west-1.amazonaws.com/19/08-white-image.jpg" }, { "name": "Adobe Rose", "url": "http://carousel-we.s3-us-west-1.amazonaws.com/19/rose.jpg", "image": "http://carousel-we.s3-us-west-1.amazonaws.com/19/06-rose-image.jpg" }];
  this.price = Math.floor(Math.random() * 1000);
  this.gallery = ["http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery1.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery2.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery3.jpg", "http://carousel-we.s3-us-west-1.amazonaws.com/19/gallery4.jpg"];
}

function writeOneMillionTimes(streamer) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      let data = new DataTemplate(i);
      if (i === 0) {
        // Last time!
        streamer.write(JSON.stringify(data));
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = streamer.write(JSON.stringify(data));
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      streamer.once('drain', write);
    }
  }
}

writeOneMillionTimes(stream);
const db = require("./index.js");
const fs = require('fs');

// fs.readFile('./products.csv', (error, data) => {
//   if (error) {
//     console.log('readfile failed');
//   } else {
//     db.Product.create({data})
//     .then(() => {
//       console.log('seeded database successfully');
//     })
//     .catch((error) => {
//       console.log('failed to seed database', error);
//     })
//   }
// })
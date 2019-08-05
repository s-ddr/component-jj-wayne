const db = require('./index2.js');
const fs = require('fs');

fs.createReadStream('test2.csv', { start: 0, end: 1 }, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log('this is data', data);
  }
});
//seeding using mongoose

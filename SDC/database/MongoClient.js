const MongoClient = require("mongodb").MongoClient;
const fs = require('fs');
// let readStream = fs.createReadStream('./test1.json');

let db;
let callback;

MongoClient.connect('mongodb://localhost:27017/sdcCollection', { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log('error connecting to the database', error);
  } else {
    db = client.db('sdcCollection');
    let collection = db.collection('hello');
    console.log('database connected');
    callback(db);
    
  }
});

module.exports = (cb) => {
  if (db !== undefined) {
    cb(db);
  } else {
    callback = cb;
  }
};
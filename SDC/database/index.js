// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/SDCDB', {useNewUrlParser: true});

// const db = mongoose.connection;
// db.on('error', () => {console.log('something does not work')});
// db.once('open', () => {console.log('database is connected')});

// const productSchema = new mongoose.Schema({
//   id: Number,
//   productName: String,
//   type: String,
//   imageDefault: String,
//   images: [],
//   colors: [{name: String, url: String, image: String}],
//   price: Number,
//   gallery: []
// });

// const Product = mongoose.model('Products', productSchema);

// module.exports = { Product };

const fs = require('fs');
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/sdcdb', { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log('error connecting to the database', error);
  } else {
    const db = client.db('sdcCollection');
    let collection = db.collection('hello');
    fs.readFile('./test1.csv', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let parsedData = JSON.parse(data);
        // console.log('this is parseddata', parsedData);
        collection.insertMany(parsedData)
          .then(() => {
            console.log('1st seed successful')
            fs.readFile('./test2.csv', (err, data) => {
              if (err) {
                console.log(err);
              } else {
                let parsedData = JSON.parse(data);
                // console.log('this is parseddata', parsedData);
                collection.insertMany(parsedData)
                  .then(() => {
                    console.log('2nd seed successful');
                    fs.readFile('./test3.csv', parsedData, (err, data) => {
                      if (err) {
                        console.log('error', error);
                      } else {
                        let parsedData = JSON.parse(data);
                        collection.insertMany(parsedData)
                          .then(() => {
                            console.log('3rd seed successful')
                            fs.readFile('./test4.csv', parsedData, (err, data) => {
                              if (err) {
                                console.log('error', error);
                              } else {
                                let parsedData = JSON.parse(data);
                                collection.insertMany(parsedData)
                                  .then(() => {
                                    console.log('4th seed successful')
                                    fs.readFile('./test5.csv', parsedData, (err, data) => {
                                      if (err) {
                                        console.log('error', error);
                                      } else {
                                        let parsedData = JSON.parse(data);
                                        collection.insertMany(parsedData)
                                          .then(() => {
                                            console.log('5th seed successful')
                                            fs.readFile('./test6.csv', parsedData, (err, data) => {
                                              if (err) {
                                                console.log('error', error);
                                              } else {
                                                let parsedData = JSON.parse(data);
                                                collection.insertMany(parsedData)
                                                  .then(() => { console.log('6th seed successful') })
                                                  .catch((error) => { console.log('3rd seed failed', error) })
                                              }
                                            })
                                          })
                                          .catch((error) => { console.log('3rd seed failed', error) })
                                      }
                                    })
                                  })
                                  .catch((error) => { console.log('3rd seed failed', error) })
                              }
                            })
                          })
                          .catch((error) => { console.log('3rd seed failed', error) })
                      }
                    })
                  })
                  .catch((error) => { console.log(`db failed to seed ${error}`) })
              }
            })
          })
          .catch((error) => { console.log(`db failed to seed ${error}`) })
        console.log('successfully connected to the database!');
      }
    });
  }
})

/*
fs.readFile('./test.json', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let parsedData = JSON.parse(data);
        for (let i = 0; i < 100; i++) {
          collection.insertMany(parsedData)
          .then(() => {console.log('database seeded with data')})
          .catch((error) => {console.log(error)})
        }
      }
    console.log('successfully connected to the database!');
  })
*/


/*
generate data
seed

generate data
seed

generate data
seed
*/
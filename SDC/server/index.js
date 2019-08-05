const express = require('express');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// const db = require('../database/MongoClient.js'); //this is for mongodb
// const db = require('../database/index-sequelize.js'); //this is for sequelize
// const db = require('../database/index2.js')

const app = express();
const port = 1337;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.listen(port, () => { console.log('server up and running at', port) });

//this mongo connection is established in the get requests
//for mongo
app.get('/api/products/:id', (req, res) => {
  let productName = req.params.id;
  let realId = productName.replace('-', ' ');
  let regex = /[A-Z]/i;
  if ((realId).match(regex)) {
    MongoClient.connect('mongodb://localhost:27017/sdcCollection', { useNewUrlParser: true }, (error, client) => {
      if (error) {
        console.log('error connecting to the database', error);
        res.status(404).send(error);
      } else {
        databaseName = client.db('sdcCollection');
        databaseName.collection('hello').find({ productName: realId }).limit(3).toArray((error, data) => {
          if (error) {
            res.status(404).send(error);
          } else {
            res.status(200).send(data);
          }
        })
      }
    })
  } else {
    let { id } = req.params;
    MongoClient.connect('mongodb://localhost:27017/sdcCollection', { useNewUrlParser: true }, (error, client) => {
      if (error) {
        console.log('error connecting to the database', error);
        res.status(404).send(error);
      } else {
        databaseName = client.db('sdcCollection');
        databaseName.collection('hello').find({ id: Number(id) }).toArray((error, data) => {
          if (error) {
            res.status(404).send(error);
          } else {
            res.status(200).send(data);
          } 
        })
      }
    })
  }
});

/* this is for mongo querying */

// app.get('/api/products/:id', (req, res) => {
//   let { id } = req.params;
//   db.collection("hello").find({id}).toArray((err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   })
// });

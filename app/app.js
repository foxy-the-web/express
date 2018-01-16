const express = require('express');
const https = require('https');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/express';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
  insertDocuments(db, function() {
    db.close();
  });
});

// Use static files
app.use(express.static('public'));

// Root route
app.get('/', function (req, res) {
 res.sendFile('index.html', {
     root: __dirname
 })
});

// Start server
const server = app.listen(3000, function () {
 
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

var insertDocuments = function(db, callback) {
    
    console.log(db.options);
    
    // // Get the documents collection
    // var collection = db.collection('documents');
    // // Insert some documents
    // collection.insertMany([
    //   {a : 1}, {a : 2}, {a : 3}
    // ], function(err, result) {
    //   assert.equal(err, null);
    //   assert.equal(3, result.result.n);
    //   assert.equal(3, result.ops.length);
    //   console.log("Inserted 3 documents into the collection");
    //   callback(result);
    // });
  }
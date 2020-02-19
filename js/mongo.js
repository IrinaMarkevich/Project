const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://admin:admin@127.0.0.1:27017/mongo_db";
const findAllUsers = require('./findAllUsers copy')

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("mongo_db");
//     dbo.createCollection("users", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
// });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("mongo_db");
    let obj = [];
    async function getObj() {
        obj = await findAllUsers();
    }
    getObj();
    console.log(obj);
    // dbo.collection("customers").insertMany(obj, function(err, res) {
    //   if (err) throw err;
    //   console.log("Number of documents inserted: " + res.insertedCount);
    //   db.close();
    // });
  });
  
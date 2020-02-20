const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://admin:admin@127.0.0.1:27017/mongo_db";




MongoClient.connect(url, function(err, db) {
    const dbo = db.db("mongo_db");
    var cursor = dbo.collection("customers").find();
    cursor.each(function(err, doc) {
        console.log(doc);

    });
});

  
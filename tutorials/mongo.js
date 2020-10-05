const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://web:SIQFq7VpLN8lt52b@cluster0.e34ts.mongodb.net?retryWrites=true&w=majority";
const mongo = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).connect();


mongo.then(client => {
        console.log("Connected successfully to server");

        const db = client.db('espresso');

        db.collection("products").find({}).toArray(function (err, datas) {
            console.log("Found the following records");
            console.log(datas);
            client.close();
        });
    })
    .catch(err => {
        console.log(err);
    });
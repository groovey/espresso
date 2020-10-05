const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://web:SIQFq7VpLN8lt52b@cluster0.e34ts.mongodb.net/espresso?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect()
    .then(result => {
        console.log("Connected successfully to server");

        const db = client.db('espresso');
        const collection = db.collection("products");

        collection.find({}).toArray(function (err, datas) {
            console.log("Found the following records");
            console.log(datas);
            client.close();
        });
    })
    .catch(err => {
        console.log(err);
    });
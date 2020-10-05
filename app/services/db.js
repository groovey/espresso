require('dotenv').config();

if (!process.env.APP_NAME) {
    process.exit('Please configure your environmental variables.');
}

if (process.env.MYSQL_STATUS == 'enabled') {
    const mysql = require('mysql2');

    const pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        debug: false
    });

    exports.mysql = () => {
        return pool.promise();
    };
}

if (process.env.MONGO_STATUS) {

    const {
        MongoClient,
        ObjectId
    } = require('mongodb');

    const url = process.env.MONGO_HOST;
    let database;

    new MongoClient(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .connect()
        .then(client => {
            console.log("Connected successfully to the mongo server.");
            database = client.db(process.env.MONGO_DATABASE);
        })
        .catch(err => {
            console.log(err);
        });

    exports.mongo = () => {
        if (database) {
            return database;
        }
        throw 'No mongodb database found.';
    };

    exports.ObjectId = ObjectId;

}
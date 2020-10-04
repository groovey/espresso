var mysql = require('mysql2');

var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "webdevel",
    database: 'espresso',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    debug: false
});

module.exports = pool.promise();
if (!process.env.MYSQL_STATUS) {
    console.error('test');
}

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

const service = {

    events() {

        pool.on('connection', function (connection) {
            console.log('Mysql new connection #%d', connection.threadId);
        });

        pool.on('acquire', function (connection) {
            console.log('Mysql connection acquired #%d', connection.threadId);
        });

        pool.on('release', function (connection) {
            console.log('Mysql connection released #%d', connection.threadId);
        });
    },

    connect(callback) {
        pool.getConnection(function (err, connection) {
            callback(err, connection);
        });
    },
};

// service.events();

module.exports = service;
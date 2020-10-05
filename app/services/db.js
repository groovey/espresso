require('dotenv').config();

if (!process.env.DB_CONNECTION) {
    process.exit('Please configure your .env database.');
}

switch (process.env.DB_CONNECTION) {
    case 'mysql':
        const mysql = require('mysql2');
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            debug: false
        });
        module.exports = pool.promise();
        break;

    case 'mongo':

        break;

    default:
        break;
}
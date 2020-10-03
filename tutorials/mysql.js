const express = require('express');
const app = express();
const mysql = require('mysql');

// mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'webdevel';
// mysql> FLUSH PRIVILEGES;
// mysql> CREATE DATABASE espresso
// mysql> CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))
// mysql> INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')
// mysql> quit

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "webdevel",
    database: 'espresso',
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    db.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.listen(3000, () => {
    console.log('App is running at http://localhost:3000');
});
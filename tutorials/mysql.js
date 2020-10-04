const express = require('express');
const app = express();
const mysql = require('mysql');

// mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'webdevel';
// mysql> FLUSH PRIVILEGES;
// mysql> CREATE DATABASE espresso
// mysql> CREATE TABLE products (name VARCHAR(255), price VARCHAR(255))
// mysql> INSERT INTO products (name, price) VALUES ('Apple', 25)
// mysql> INSERT INTO products (name, price) VALUES ('Banana', 13)
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
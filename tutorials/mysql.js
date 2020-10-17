const mysql = require('mysql2')

// mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'webdevel';
// mysql> FLUSH PRIVILEGES;
// mysql> CREATE DATABASE espresso
// mysql> CREATE TABLE products (name VARCHAR(255), price VARCHAR(255))
// mysql> INSERT INTO products (name, price) VALUES ('Apple', 25)
// mysql> INSERT INTO products (name, price) VALUES ('Banana', 13)
// mysql> quit

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'webdevel',
  database: 'espresso'
})
con.promise().query('SELECT * FROM products')
  .then(([rows, fields]) => {
    console.log(rows)
  })
  .catch(console.log)
  .then(() => con.end())

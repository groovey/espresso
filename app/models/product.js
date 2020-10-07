const db = require('../services').mysql;

const model = {

    all(callback) {

        db.connect(function (err, conn) {
            conn.query('SELECT * FROM products', (err, rows, fields) => {
                callback(err, rows, fields);
            });

            conn.release();
        });
    },

    find(id, callback) {

        db.connect(function (err, conn) {
            conn.query('SELECT * FROM products WHERE id = ? LIMIT 1', [id], (err, rows, fields) => {
                callback(err, rows, fields);
            });

            conn.release();
        });

        // return mysql.connect().execute('SELECT * FROM products WHERE id = ? LIMIT 1', [id]);
    },

    save(data) {
        mysql.connect().execute('INSERT INTO products (name, price) VALUES (?, ?)',
            [data.name, data.price]
        );
    },

    update(data, id) {
        mysql.connect().execute('UPDATE products SET name = ?, price = ? WHERE id = ?',
            [data.name, data.price, id]
        );
    },

    delete(id) {
        mysql.connect().execute('DELETE FROM products WHERE id = ?',
            [id]
        );
    }

};

module.exports = model;
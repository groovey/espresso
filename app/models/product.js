const mysql = require('../services/db').mysql;

const model = {

    all() {
        return mysql().execute('SELECT * FROM products');
    },

    find(id) {
        return mysql().execute('SELECT * FROM products WHERE id = ? LIMIT 1', [id]);
    },

    save(data) {
        mysql().execute('INSERT INTO products (name, price) VALUES (?, ?)',
            [data.name, data.price]
        );
    },

    update(data, id) {
        mysql().execute('UPDATE products SET name = ?, price = ? WHERE id = ?',
            [data.name, data.price, id]
        );
    },

    delete(id) {
        mysql().execute('DELETE FROM products WHERE id = ?',
            [id]
        );
    }

}

module.exports = model;
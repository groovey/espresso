const mysql = require('../services/db').mysql;

class Product {

    constructor() {}

    static all() {
        return mysql().execute('SELECT * FROM products');
    }

    static find(id) {
        return mysql().execute('SELECT * FROM products WHERE id = ? LIMIT 1', [id]);
    }

    save() {
        mysql().execute('INSERT INTO products (name, price) VALUES (?, ?)',
            [this.name, this.price]
        );
    }

    update() {
        mysql().execute('UPDATE products SET name = ?, price = ? WHERE id = ?',
            [this.name, this.price, this.id]
        );
    }

    delete() {
        mysql().execute('DELETE FROM products WHERE id = ?',
            [this.id]
        );
    }

}

module.exports = Product;
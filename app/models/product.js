const db = require('../services/db');

class Product {

    constructor() {}

    static all() {
        return db.execute('SELECT * FROM products');
    }

    static find(id) {
        return db.execute('SELECT * FROM products WHERE id = ? LIMIT 1', [id]);
    }

    save() {
        db.execute('INSERT INTO products (name, price) VALUES (?, ?)',
            [this.name, this.price]
        );
    }

    update() {
        db.execute('UPDATE products SET name = ?, price = ? WHERE id = ?',
            [this.name, this.price, this.id]
        );
    }

    delete() {
        db.execute('DELETE FROM products WHERE id = ?',
            [this.id]
        );
    }

}

module.exports = Product;
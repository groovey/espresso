const {
    mongo,
    ObjectId
} = require('../services/db');

class User {

    constructor() {}

    static collection() {
        return mongo().collection('users');
    }

    static id(id) {
        return ObjectId(id);
    }

    save() {
        mongo().execute('INSERT INTO products (name, price) VALUES (?, ?)',
            [this.name, this.price]
        );
    }

    update() {
        mongo().execute('UPDATE products SET name = ?, price = ? WHERE id = ?',
            [this.name, this.price, this.id]
        );
    }

    delete() {
        mongo().execute('DELETE FROM products WHERE id = ?',
            [this.id]
        );
    }

}

module.exports = User;
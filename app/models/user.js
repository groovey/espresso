const mongo = require('../services/db').mongo;

class User {

    constructor() {
        return mongo().collection('users');
    }

    static get(cond = {}) {
        // return mongo().execute('SELECT * FROM products');

        return mongo().collection('users').find({});

        //     .toArray(function (err, datas) {
        //     console.log("Found the following records");
        //     console.log(datas);
        //     client.close();
        // });

    }

    static find(cond = {}) {
        return mongo().collection('users').find({});
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
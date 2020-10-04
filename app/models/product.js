const db = require('../services/db');
const products = [];

module.exports = class Product {
    constructor(name) {
        this.name = name;
    }

    save() {
        products.push(this);
    }

    static all() {
        return db.execute('SELECT * FROM products');
    }
};
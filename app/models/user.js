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

}

module.exports = User;
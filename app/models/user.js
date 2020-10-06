const {
    mongo,
    ObjectId
} = require('../services/db');

const model = {

    collection() {
        return mongo().collection('users');
    },

    id(id) {
        return ObjectId(id);
    }

};

module.exports = model;
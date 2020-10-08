// The error module base on express-validator
// https: //express-validator.github.io/docs/index.html
const validationResult = require('express-validator').validationResult;

const service = {

    error(req) {

        let msg;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            msg = errors.array()[0].msg;
        }

        return msg;
    }

};

module.exports = service;
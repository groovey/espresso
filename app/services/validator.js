// The error module base on express-validator
// https: //express-validator.github.io/docs/index.html
const {
    body,
    validationResult
} = require('express-validator');

const service = {

    error(req) {

        let msg;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            msg = errors.array()[0].msg;
        }

        return msg;
    },

    required(field) {
        return body(field).not().isEmpty().trim().escape().withMessage(`The ${field} field is required.`);
    },

    email(field) {
        return body(field).isEmail().normalizeEmail().withMessage('Invalid email address');
    },

    min(field, value) {
        return body(field).isLength({
            min: value,
        }).withMessage(`'The ${field} must be at least ${value}.`);
    },

    max(field, value) {
        return body(field).isLength({
            max: value,
        }).withMessage(`'The ${field} may not be greater than ${value}.`);
    },

    alphanumeric(field) {
        return body(field).isAlphanumeric().withMessage(`'The ${field} may only contain letters and numbers.`);
    },

    confirm(field) {
        return body(field).custom((value, {
            req
        }) => {

            if (value !== req.body.password_confirmation) {
                return Promise.reject('Password confirmation does not match password');
            }

            return true;
        });
    },

};

module.exports = service;
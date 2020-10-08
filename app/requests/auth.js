const body = require('express-validator').body;

const request = {
    rules() {
        return [
            body('email').isEmail().normalizeEmail().withMessage('Invalid email or password.'),
            body('password').isLength({
                min: 6
            }).withMessage('Invalid email or password.')

        ];
    }
};

module.exports = request;
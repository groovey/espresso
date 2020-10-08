const body = require('express-validator').body;

// todo: check email is not the same.
// todo : if no password provided then don't validate.
const request = {

    rules() {


        return [
            // body('email').isEmail().normalizeEmail().withMessage('Invalid email address.'),
            // body('password').isLength({
            //     min: 6
            // }).withMessage('The password must be at least 6 character.')
            this.custom()
        ];
    },

    custom() {

        return body('email').custom((value, {
            req
        }) => {
            console.log('value', value);
            console.log('method', req.method);
        });


    }
};

module.exports = request;
const body = require('express-validator').body;
const User = require('@app/models').User;
const validator = require('@app/helpers').validator;

const request = {

    store() {
        return [
            validator.required('name'),
            validator.email('email'),
            this.uniqueEmail(),
            validator.required('password'),
            validator.confirm('password')
        ];
    },

    update() {
        return [
            validator.required('name'),
            validator.email('email'),
            this.uniqueEmail(),
            validator.confirm('password')
        ];
    },

    uniqueEmail() {

        return body('email').custom((value, {
            req
        }) => {

            let email = value;
            let method = req.method;
            let id = req.params.id;
            let cond;

            if (method == 'POST') {
                cond = {
                    email: email
                };
            } else if (method == 'PUT') {
                cond = {
                    _id: {
                        $ne: User.id(id)
                    },
                    email: email
                };
            }

            return User.collection()
                .find(cond)
                .toArray()
                .then((data) => {
                    if (data.length > 0) {
                        return Promise.reject('E-mail already in use');
                    }
                });
        });

    }
};

module.exports = request;
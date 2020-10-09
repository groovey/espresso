const path = require('path');
const bcrypt = require('bcrypt');
const User = require('@app/models').User;
const validator = require('@app/services').validator;

const controller = {

    login: (req, res) => {
        res.render(controller.view('login'), {
            error: req.flash('error')
        });
    },

    logout: (req, res) => {
        req.session.destroy(err => {
            res.redirect('/admin/login');
        });
    },

    auth: (req, res) => {

        let error = validator.error(req);
        if (error) {
            req.flash('error', error);
            return res.redirect('/admin/login');
        }

        let cond = {
            email: req.body.email
        };

        User.collection()
            .findOne(cond)
            .then((data) => {
                if (data) {
                    bcrypt.compare(req.body.password, data.password)
                        .then(function (result) {
                            if (result) {
                                req.session.user = data;
                                res.redirect('/admin/dashboard');
                            } else {
                                req.flash('error', 'Invalid email or password.');
                                res.redirect('/admin/login');
                            }
                        });
                } else {
                    req.flash('error', 'Invalid email or password.');
                    res.redirect('/admin/login');
                }
            })
            .catch(err => console.log(err));
    },

    view(view) {
        return path.join(RESOURCES_PATH, 'views', 'admin', 'auth', view);
    },
};

module.exports = controller;
const path = require('path');
const bcrypt = require('bcrypt');
const config = require('@config');
const validation = require('@app/services').validation;
const User = require('@app/models').User;

const controller = {
    // Display a listing of the resource.
    index: (req, res) => {

        User.all()
            .toArray()
            .then((datas) => {
                res.render(controller.view('index'), {
                    users: datas
                });
            }).catch((err) => {
                console.log(err);
            });
    },

    // Show the form for creating a new resource.
    create: (req, res) => {
        res.render(controller.view('entry'), {
            title: 'User Add',
            action: '/admin/users',
            method: 'POST',
            submit: 'Save',
            error: req.flash('error'),
            user: [],
        });
    },

    // Store a newly created resource in storage.
    store: (req, res) => {

        let error = validation.error(req);
        if (error) {
            req.flash('error', error);
            return res.redirect('/admin/users/create');
        }

        let salt = bcrypt.genSaltSync(config.admin.saltRounds);
        let hash = bcrypt.hashSync(req.body.password, salt);

        let data = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
        };

        User.collection()
            .insertOne(data)
            .then(() => {
                res.redirect('users');
            }).catch((err) => {
                console.log(err);
            });
    },

    // Display the specified resource.
    show: (req, res) => {

        let id = User.id(req.params.id);

        User.collection()
            .findOne(id)
            .then((data) => {
                res.render(controller.view('show'), {
                    user: data
                });
            }).catch((err) => {
                console.log(err);
            });
    },

    // Show the form for editing the specified resource.
    edit: (req, res) => {

        let id = User.id(req.params.id);

        User.collection()
            .findOne(id)
            .then((data) => {
                res.render(controller.view('entry'), {
                    title: 'User Edit',
                    action: '/admin/users/' + id,
                    method: 'PUT',
                    submit: 'Update',
                    error: req.flash('error'),
                    user: data
                });
            })
            .catch(console.log);
    },

    // Update the specified resource in storage.
    update: (req, res) => {

        let error = validation.error(req);
        if (error) {
            req.flash('error', error);
            console.log(error);
            return res.redirect('/admin/users/' + req.params.id + '/edit');
        }

        let password = req.body.password;

        let cond = {
            _id: User.id(req.params.id)
        };

        let data = {
            $set: {
                name: req.body.name,
                email: req.body.email
            }
        };

        if (password) {
            let salt = bcrypt.genSaltSync(config.admin.saltRounds);
            let hash = bcrypt.hashSync(password, salt);
            data.$set.password = hash;
        }

        User.collection()
            .updateOne(cond, data)
            .then(() => {
                res.redirect('/admin/users');
            })
            .catch(console.log);

    },

    // Remove the specified resource from storage.    
    destroy: (req, res) => {

        let cond = {
            _id: User.id(req.params.id)
        };

        User.collection()
            .deleteOne(cond)
            .then(() => {
                res.redirect('/admin/users');
            })
            .catch(console.log);
    },

    view(view) {
        return path.join(RESOURCES_PATH, 'views', 'admin', 'users', view);
    },
};

module.exports = controller;
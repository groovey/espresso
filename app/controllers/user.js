const path = require('path');
const pathinfo = require('../helpers').pathinfo;
const User = require('../models').User;

let controller = {
    // Display a listing of the resource.
    index: function (req, res) {

        User.collection()
            .find({})
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
            user: [],
        });
    },

    // Store a newly created resource in storage.
    store: (req, res) => {
        let user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.save();

        res.redirect('/admin/users');
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
        let id = req.params.id;
        User.find(id)
            .then(([data]) => {
                res.render(controller.view('entry'), {
                    title: 'User Edit',
                    action: '/admin/users/' + id,
                    method: 'PUT',
                    submit: 'Update',
                    user: data[0]
                });
            })
            .catch(console.log);
    },

    // Update the specified resource in storage.
    update: (req, res) => {
        let user = User.prototype;
        user.id = req.params.id;
        user.name = req.body.name;
        user.email = req.body.email;
        user.update();
        res.redirect('/admin/users');
    },

    // Remove the specified resource from storage.    
    destroy: (req, res) => {
        let user = User.prototype;
        user.id = req.params.id;
        user.delete();
        res.redirect('/admin/users');
    },

    view(view) {
        return path.join(pathinfo.resources('views'), 'admin', 'users', view);
    },
};

module.exports = controller;
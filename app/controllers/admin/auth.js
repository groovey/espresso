const path = require('path');
const User = require('@app/models').User;

const controller = {

    login: (req, res) => {

        res.render(controller.view('login'), {});
    },

    auth: (req, res) => {
        res.redirect('/admin/login');
    },

    view(view) {
        return path.join(RESOURCES_PATH, 'views', 'admin', 'auth', view);
    },
};

module.exports = controller;
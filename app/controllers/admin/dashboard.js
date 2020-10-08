const path = require('path');

const controller = {

    index: (req, res) => {
        res.render(controller.view('index'), {
            user: req.session.user
        });
    },

    redirect: (req, res) => {
        res.redirect('/admin/dashboard');
    },

    view(view) {
        return path.join(RESOURCES_PATH, 'views', 'admin', 'dashboard', view);
    },
};

module.exports = controller;
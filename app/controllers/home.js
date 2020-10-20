const path = require('path')

const controller = {

  index: (req, res) => {
    const html = `
Welcome to Espresso.JS.

login: http://localhost:3000/admin/login


Instructions for creating a user:
- Go to http: //localhost:3000/admin/users/create
- Fill the necessary fields, example below
    name: admin
    email: admin@gmail.com
    password: password

Right now if you notice you can access admin area with no auth.
This has been disabled purposely for hassle free local development.

Admin: http://localhost:3000/admin/dashboard



Crafted with Love.

`
    res.send(html)
  },

  view (view) {
    return path.join(global.RESOURCES_PATH, 'views', view)
  }
}

module.exports = controller

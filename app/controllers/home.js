const path = require('path')

const controller = {

  index: (req, res) => {
    const html = `
Welcome to Espresso.JS.

login: http://192.168.99.101/admin/login

* Replace IP with your local ip address.

Instructions for creating a user:
- Go to http: //192.168.99.101/admin/users/create
- Fill the necessary fields, example below
    name: admin
    email: admin@gmail.com
    password: password
    
 
Right now if you notice you can access admin area with no auth. 
This has been disabled purposely for hassle free local development. 


Admin: http: //192.168.99.101/admin/dashboard


Crafted with Love: Harold Kim Cantil
        
`
    res.send(html)
  },

  view (view) {
    return path.join(RESOURCES_PATH, 'views', view)
  }
}

module.exports = controller

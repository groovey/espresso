// Package.json module alias
require('module-alias/register')

// The application path directories
require('./bootstrap/path')(__dirname)

// The engine of the application
const app = require('./bootstrap/app')()

// Routes for api, web and admin
app.routes()

// The error status pages
app.error()

// Connect to mongo
app.db()

// Run the application
const server = app.run()

// Run socket.io
app.socket(server)

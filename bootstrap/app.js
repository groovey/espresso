const path = require('path')
const csrf = require('csurf')
const chalk = require('chalk')
const express = require('express')
const flash = require('connect-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const middleware = require('@app/middlewares')
const config = require('@config')
require('dotenv').config()

module.exports = () => {
  // The secret sauce
  const app = express()
  const hostname = process.env.APP_URL
  const port = process.env.APP_PORT || '3000'

  // Set the root directory
  const cwd = process.cwd()

  if (process.env.NODE_ENV === 'production') {
    require('./prod')(app)
  } else {
    require('./dev')(app)
  }

  // Ejs template engine
  app.set('view engine', 'ejs')
  app.set('views', path.join(cwd, 'resources', 'views'))

  // Public path directory
  app.use(express.static(path.join(cwd, 'public')))

  // Middleware for body parser
  app.use(express.json())
  app.use(express.urlencoded({
    extended: true
  }))

  // Middleware for cookies
  app.use(cookieParser())

  // Middleware for sessions
  app.use(session({
    secret: process.env.APP_KEY,
    saveUninitialized: true,
    resave: true
  }))

  // Middleware for session flash
  app.use(flash())

  // Middleware for overiding form methods
  app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))

  // Middleware for cross site scripting
  app.use(csrf({
    cookie: true
  }))

  // Middleware for setting the csrf token
  app.use(function (req, res, next) {
    var token = req.csrfToken()
    res.cookie('XSRF-TOKEN', token)
    res.locals.csrfToken = token
    next()
  })

  // Make global variables and functions
  app.use(require('./global'))

  return {

    routes () {
      const folder = '../routes/'
      app.use(require(folder + 'web'))
      app.use('/api', require(folder + 'api'))
      app.use('/admin', require(folder + 'admin'))
    },

    error () {
      app.use(middleware.error.code404)
      if (process.env.NODE_ENV === 'production') {
        app.use(middleware.error.code500)
      }
    },

    db () {
      const mongo = require('@app/services').mongo
      mongo.init()
    },

    socket (server) {
      if (config.app.socketio !== 'enabled') {
        return
      }
      require('@app/sockets')(server)
    },

    run () {
      const server = app.listen(port, () => {
        console.log()
        console.log(' ' + chalk.bgYellow(chalk.black(' INFO ')))
        console.log()
        console.log(' App running at:')
        console.log('  - Local: ' + chalk.green(hostname + ':' + port))
        console.log()
        console.log(' Note that the development build is not optimized.')
        console.log(' To create a production build, run ' + chalk.blue('npm run build:prod.'))
        console.log()
      })

      return server
    }

  }
}

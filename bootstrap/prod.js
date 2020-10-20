const logger = require('morgan')
const fs = require('fs')
// const helmet = require('helmet')
const path = require('path')
const compression = require('compression')

module.exports = (app) => {
  // Middleware for security
  // app.use(helmet());

  // Node logger
  var accessLogStream = fs.createWriteStream(path.join(global.STORAGE_PATH, 'logs', 'access.log'), {
    flags: 'a'
  })

  app.use(logger('combined', {
    stream: accessLogStream
  }))

  // Compress assets
  app.use(compression())
}

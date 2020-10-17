const mysql = require('mysql2')
const chalk = require('chalk')

let pool = {}

const service = {

  init () {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      debug: false
    })
  },

  events () {
    pool.on('connection', function (connection) {
      console.log('Mysql pool new connection #', chalk.blue(connection.threadId))
    })

    pool.on('acquire', function (connection) {
      console.log('Mysql pool connection acquired #', chalk.blue(connection.threadId))
    })

    pool.on('release', function (connection) {
      console.log('Mysql pool connection released #', chalk.blue(connection.threadId))
    })
  },

  connect () {
    return pool.promise()
  }
}

service.init()
// service.events();

module.exports = service

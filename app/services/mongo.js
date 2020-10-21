const chalk = require('chalk')

const { MongoClient, ObjectId } = require('mongodb')

let client
let database

const service = {

  id (id) {
    return ObjectId(id)
  },

  init () {
    const url = process.env.MONGO_HOST

    client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).connect()

    client.then((db) => {
      database = db.db(process.env.MONGO_DATABASE)

      const filename = require.main.filename

      if (!filename.includes('artisan')) {
        console.log(' Mongo connection at: ' + chalk.green(url))
        console.log()
      }
    }).catch(err => {
      if (err) {
        const message = 'Unable to connect to mongo db: ' + chalk.red(url)
        throw new Error(message)
      }
    })

    return client
  },

  connect () {
    if (!client) {
      this.init()
    }

    if (database) {
      return database
    }
  }

}

module.exports = service

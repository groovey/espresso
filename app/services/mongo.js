const chalk = require('chalk')

const {
  MongoClient,
  ObjectId
} = require('mongodb')

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
      console.log(chalk.green('Sucessfully connected to the mongo server.'))
    })
      .catch(err => {
        console.log(err)
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

const faker = require('faker')
const bcrypt = require('bcrypt')
const User = require('@app/models').User
const seeder = require('@app/services').seeder
const config = require('@config')

module.exports = {

  factory () {
    const salt = bcrypt.genSaltSync(config.admin.saltRounds)
    const hash = bcrypt.hashSync('password', salt)

    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: hash
    }
  },

  run () {
    const datas = seeder.factory().times(10).create()
    const options = {
      ordered: true
    }

    User.collection()
      .insertMany(datas, options)
      .then((result) => {
        console.log('Total users inserted : ' + result.insertedCount)
        process.exit(1)
      }).catch((err) => {
        console.log(err)
      })
  }
}

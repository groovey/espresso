const program = require('commander')
const seeder = require('@app/services').seeder

module.exports = {
  index () {
    program
      .command('db:seed <collection>')
      .description('Seed the database with records.')
      .action((collection) => {
        const seed = seeder.require(collection)
        seed.run()
      })
  }
}

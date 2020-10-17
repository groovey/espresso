const program = require('commander')

module.exports = {
  index () {
    program
      .command('make:controller <source> [destination]')
      .description('Create a new controller class.')
      .action((source, destination) => {
        console.log('make:controller')
        console.log('Source: ', source)
      })

    program
      .command('make:model <source> [destination]')
      .description('Create a new model class')
      .action((source, destination) => {
        console.log('make:model')
        console.log('Source: ', source)
      })
  }
}

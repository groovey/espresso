const program = require('commander');

class Console {

    constructor() {}

    static handle() {

        program
            .command('make:controller <source> [destination]')
            .description('Create a new controller class.')
            .action((source, destination) => {
                console.log('make:controller');
                console.log('Source: ', source);
            });

        program
            .command('make:model <source> [destination]')
            .description('Create a new model class')
            .action((source, destination) => {
                console.log('make:model');
                console.log('Source: ', source);
            });

    }
}

module.exports = Console;
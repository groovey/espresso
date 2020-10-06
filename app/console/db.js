const program = require('commander');

class Console {

    constructor() {}

    static handle() {

        program
            .command('db:seed <source>')
            .description('Seed the database with records.')
            .action((source, destination) => {
                console.log('db:seed');
            });

    }
}

module.exports = Console;
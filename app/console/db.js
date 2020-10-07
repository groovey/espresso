const program = require('commander');

module.exports = {

    index() {

        program
            .command('db:seed <source>')
            .description('Seed the database with records.')
            .action((source, destination) => {
                console.log('db:seed');
            });

    }
};
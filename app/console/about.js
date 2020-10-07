const program = require('commander');
const boxen = require('boxen');
const {
    version
} = require('yargs');

module.exports = {

    version: 'v0.0.1',

    index() {

        let version = this.version;

        program.version(version, '-v, -V, --vers', 'output the current version');

        program
            .command('about')
            .description('The current version')
            .action(() => {
                console.log(boxen(`Espresso.js ${version}. Crafted with Love.`, {
                    padding: 1,
                    borderStyle: 'single'
                }));
            });
    }

};
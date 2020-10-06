const program = require('commander');

module.exports = {
    commands: () => {
        require('./about').handle();
        require('./db').handle();
        require('./make').handle();
    },
    run: () => {
        program.parse(process.argv);
        process.exit(1);
    }
};
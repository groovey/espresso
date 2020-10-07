const program = require('commander');

module.exports = {
    commands: () => {
        require('./about').index();
        require('./db').index();
        require('./make').index();
    },
    run: () => {
        program.parse(process.argv);
        process.exit(1);
    }
};
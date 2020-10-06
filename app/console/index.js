const program = require('commander');

exports.commands = () => {
    require('./about').handle();
    require('./db').handle();
    require('./make').handle();
};

exports.run = () => {
    program.parse(process.argv);
    process.exit(1);
};
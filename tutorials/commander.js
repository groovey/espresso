const {
    program
} = require('commander');

program.version('0.0.1', '-v, -V, --vers', 'output the current version');

program
    .command('clone <source> [destination]')
    .description('clone a repository into a newly created directory')
    .action((source, destination) => {
        console.log('Cloning command called.');
        console.log('Source: ', source);

    });

program.parse(process.argv);
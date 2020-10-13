const program = require('commander');
const mongo = require('@app/services').mongo;

module.exports = {

    commands() {
        require('./about').index();
        require('./db').index();
        require('./make').index();
    },

    db() {
        return mongo.init();
    },

    run() {
        this.db().then(() => {
            program.parse(process.argv);
        }).catch(err => console.log(err))
    }
};
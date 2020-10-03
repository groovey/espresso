module.exports = class User {
    constructor(name) {
        this.name = name;
    }

    save() {
        console.log('User save.');
    }

    static all() {
        console.log('User all is called.')
        return [];
    }
};
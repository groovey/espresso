const path = require('path');

let pathinfo = {
    base() {
        return process.cwd();
    },
    resources(folder) {
        return path.join(this.base(), 'resources', folder);
    }
};

module.exports = pathinfo;
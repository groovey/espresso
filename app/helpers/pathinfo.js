const path = require('path');

const pathinfo = {
    base() {
        return process.cwd();
    },
    resources(folder) {
        return path.join(this.base(), 'resources', folder);
    }
};

module.exports = pathinfo;
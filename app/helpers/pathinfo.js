const path = require('path');

const pathinfo = {
    base() {
        return BASE_PATH;
    },
    resources(folder) {
        return path.join(this.base(), 'resources', folder);
    }
};

module.exports = pathinfo;
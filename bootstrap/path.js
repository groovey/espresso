const path = require('path');

module.exports = (base) => {
    global.BASE_PATH = base;
    global.APP_PATH = path.join(base, 'app');
    global.CONFIG_PATH = path.join(base, 'config');
    global.DATABASE_PATH = path.join(base, 'database');
    global.PUBLIC_PATH = path.join(base, 'public');
    global.RESOURCES_PATH = path.join(base, 'resources');
    global.STORAGE_PATH = path.join(base, 'storage');
};
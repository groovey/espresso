const path = require('path');

// The application path location
global.BASE_PATH = __dirname;
global.APP_PATH = path.join(BASE_PATH, 'app');
global.STORAGE_PATH = path.join(BASE_PATH, 'storage');

// The engine of the application
const app = require('./bootstrap/app')();

// Routes for api, web and admin
app.routes();

// The error status pages
app.error();

// Run the application
app.run();
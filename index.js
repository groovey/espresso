const path = require('path');

// Package.json module alias
require('module-alias/register');

// The application path location
global.BASE_PATH = __dirname;
global.APP_PATH = path.join(BASE_PATH, 'app');
global.CONFIG_PATH = path.join(BASE_PATH, 'config');
global.DATABASE_PATH = path.join(BASE_PATH, 'database');
global.PUBLIC_PATH = path.join(BASE_PATH, 'public');
global.RESOURCES_PATH = path.join(BASE_PATH, 'resources');
global.STORAGE_PATH = path.join(BASE_PATH, 'storage');

// The engine of the application
const app = require('./bootstrap/app')();

// Routes for api, web and admin
app.routes();

// The error status pages
app.error();

// Run the application
app.run();
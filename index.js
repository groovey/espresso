const app = require('./bootstrap/app')();

// Routes for api, web and admin
app.routes();

// The error status pages
app.error();

// Run the application
app.run();
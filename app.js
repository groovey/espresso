const express = require('express');
require('dotenv').config();

const hostname = process.env.APP_URL;
const port = process.env.PORT || '3000';

app = express();

const loader = require('./bootstrap/loader')(app);
const routes = require('./routes')(app);

// Load error status pages
loader.error();

// Run the app
app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}/`);
});
const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const webRoute = require('./routes/web');
const adminRoute = require('./routes/admin');
const apiRoute = require('./routes/api');
const log = console.log;
const app = express();
const hostname = 'localhost';
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(webRoute);
app.use('/admin', adminRoute);
app.use('/api', apiRoute);

// Middleware - Error 404
app.use((req, res, next) => {
    res.status(404).send('Error 404: Page not found!');
});

// Middleware - Error 500
app.use((err, req, res, next) => {
    res.status(500).send('Error 500: Something broke!');
});

app.listen(port, () => {
    log(`Server running at http://${hostname}:${port}/`);
});
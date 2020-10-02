const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const webRoute = require('./routes/web');
const adminRoute = require('./routes/admin');
const apiRoute = require('./routes/api');
const helper = require('./bootstrap/helper');
const app = express();
const log = console.log;
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
    res.status(404).sendFile(path.join(__dirname, 'resources', 'views', 'error', '404.html'));
});

// Middleware - Error 500
app.use((err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, 'resources', 'views', 'error', '500.html'));
});

app.listen(port, () => {
    log(`Server running at http://${hostname}:${port}/`);
});
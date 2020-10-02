const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const webRoute = require('./routes/web');
const log = console.log;
const app = express();
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(webRoute);

// Middleware - Error 404
app.use((req, res, next) => {
    res.status(404).send('Page not found!');
});

// Middleware - Error 500
app.use((err, req, res, next) => {
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Example app listening on port port!`);
});
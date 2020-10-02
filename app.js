const express = require('express');
const http = require('http');
const webRoute = require('./routes/web');

const app = express();
const port = 3000;

// app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Middleware - Logger
const logger = (req, res, next) => {
    console.log('LOGGED');
    next();
};
app.use(logger);

// Middleware - Matches all request
app.use('/', (req, res, next) => {
    console.log('This middleware always run');
    next();
});

// Middleware - only for /me route
app.use('/me', (req, res, next) => {
    console.log('This middleware is only form /me');
    next();
});

// Middleware - error 500
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.use(webRoute);

app.listen(port, () => {
    console.log(`Example app listening on port port!`);
});
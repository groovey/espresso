const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const http = require('http');

const webRoute = require('./routes/web');
const adminRoute = require('./routes/admin');
const apiRoute = require('./routes/api');
const errorMiddleware = require('./app/middlewares/error');
const hostname = 'localhost';
const port = process.env.PORT || '3000';
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(webRoute);
app.use('/admin', adminRoute);
app.use('/api', apiRoute);
app.use(errorMiddleware.e404);

// todo run only in dev environment
// app.use(errorMiddleware.e500);

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

const webRoute = require('./routes/web');
const adminRoute = require('./routes/admin');
const apiRoute = require('./routes/api');
const helper = require('./bootstrap/helper');
const errorMiddleware = require('./app/middleware/error');
const log = console.log;
const hostname = 'localhost';
const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources', 'views'));
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
app.use(errorMiddleware.e500);

app.listen(port, () => {
    log(`Server running at http://${hostname}:${port}/`);
});
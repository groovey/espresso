const express = require('express');
const session = require('express-session');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const http = require('http');
const methodOverride = require('method-override');

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
app.use(session({
    secret: process.env.APP_KEY,
    saveUninitialized: true,
    resave: true,
    // cookie: {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: true,
    //     maxAge: 600000
    // }
}));
// app.set('trust proxy', 1);
// app.use(methodOverride(req => req.body._method));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use(webRoute);
app.use('/admin', adminRoute);
app.use('/api', apiRoute);
app.use(errorMiddleware.e404);

if (process.env.NODE_ENV == 'production') {
    app.use(errorMiddleware.e500);
}

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
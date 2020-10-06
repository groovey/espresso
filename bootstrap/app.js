const express = require('express');
const helmet = require("helmet");
const logger = require('morgan');
const path = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const middleware = require('../app/middlewares');
require('dotenv').config();

module.exports = function () {

    // The secret sauce
    let app = express();
    let hostname = process.env.APP_URL;
    let port = process.env.PORT || '3000';

    // Set the root directory
    let cwd = process.cwd();

    // Middleware for security
    app.use(helmet());

    // Node logger
    app.use(logger('dev'));

    // Middleware for compressing assets
    app.use(compression());

    // Ejs template engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(cwd, 'resources', 'views'));

    // Public path directory
    app.use(express.static(path.join(cwd, "public")));

    // Middleware for body parser
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

    // Middleware for cookies
    app.use(cookieParser());

    // Middleware for cross site scripting
    app.use(csrf({
        cookie: true
    }));

    // Middleware for sessions
    app.use(session({
        secret: process.env.APP_KEY,
        saveUninitialized: true,
        resave: true,
    }));

    // Middleware for session flash
    app.use(flash());

    // Middleware for overiding form methods
    app.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));

    return {

        routes() {
            let folder = '../routes/';
            app.use(require(folder + 'web'));
            app.use('/api', require(folder + 'api'));
            app.use('/admin', require(folder + 'admin'));
        },

        error() {
            app.use(middleware.error.code404);
            if (process.env.NODE_ENV == 'production') {
                app.use(middleware.error.code500);
            }
        },

        run() {
            app.listen(port, () => {
                console.log(`Server running at ${hostname}:${port}/`);
            });
        }
    };
};
module.exports = (app) => {

    // Routes for front facing apps
    app.use(require('./web'));

    // Routes for api
    app.use('/api', require('./api'));

    // Routes for admin 
    app.use('/admin', require('./admin'));

    return {};
};
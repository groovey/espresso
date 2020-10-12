module.exports = {
    admin: {
        auth: require('./admin/auth'),
        dashboard: require('./admin/dashboard'),
        user: require('./admin/user'),
        product: require('./admin/product'),
    },
    api: {
        v1: {
            user: require('./api/v1/user'),
        }
    }
};
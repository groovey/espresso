const middleware = {

    verify: (req, res, next) => {
        if (!req.session.user) {

            let env = process.env.NODE_ENV || 'development';

            if (env !== 'development') {
                return res.redirect('/admin/login');
            }
        }
        next();
    },
};

module.exports = middleware;
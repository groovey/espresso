module.exports = function (req, res, next) {
    if (req.body && typeof req.body === 'object') {

        if (req.method == 'POST' || req.method == 'PUT') {
            Object.entries(req.body).forEach(([key, value]) => {
                req.flash('input.' + key, value);
            });
        }
    }
    next();
};
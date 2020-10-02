const path = require('path');
const log = console.log;

module.exports = {
    e404: (req, res, next) => {
        res.status(404).render(path.join('error', '404'), {
            title: '404 | Page Not Found',
        });
    },
    e500: (err, req, res, next) => {
        log(err);
        res.status(500).render(path.join('error', '500'), {
            title: '500 | Internal Server Error',
        });
    },
};
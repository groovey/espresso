const url = require('url');

module.exports = {

    full() {

        req = REQUEST;

        return url.format({
            protocol: req.protocol,
            host: req.get('host'),
            pathname: req.originalUrl
        });
    }

};
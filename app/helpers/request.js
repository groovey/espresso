const service = {

    old(field, defined = '') {
        value = REQUEST.body[field];
        if (value) {
            return value;
        }

        return defined;
    }

};

module.exports = service;
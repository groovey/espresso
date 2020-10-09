const service = {

    old(field, defined = '') {

        let value = REQUEST.flash('input.' + field);

        if (value.length > 0) {
            return value;
        }

        value = REQUEST.body[field];

        if (value) {
            return value;
        }

        return defined;
    }

};

module.exports = service;
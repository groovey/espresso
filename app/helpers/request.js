const request = {

    old(field, defined = '') {

        let value = REQUEST.flash('body.' + field);

        if (value.length > 0) {
            return value;
        }

        value = REQUEST.body[field];

        if (value) {
            return value;
        }

        return defined;
    },

    session: {

        clear() {
            Object.entries(REQUEST.body).forEach(([key, value]) => {
                REQUEST.flash('body.' + key, '');
            });
        },

        reflash() {
            Object.entries(REQUEST.body).forEach(([key, value]) => {
                REQUEST.flash('body.' + key, value);
            });
        }

    }

};

module.exports = request;
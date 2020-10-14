const path = require('path');

const service = {

    perPage: 1,
    currentPage: 1,
    total: 0,

    paginate() {

        this.currentPage = parseInt(REQUEST.query.page) || 1;
        let skip = (this.currentPage - 1) * parseInt(this.perPage);

        return {
            skip: skip,
            perPage: this.perPage,
            currentPage: this.currentPage,
        };

    },

    lastPage(total) {
        return Math.ceil(total / this.perPage);
    }

};

module.exports = service;
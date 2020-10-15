const path = require('path');

const service = {

    perPage: 1,
    total: 0,
    currentPage: 1,
    lastPage: 0,

    init(url) {

        this.url = url;
        this.currentPage = parseInt(REQUEST.query.page) || 1;
        let skip = (this.currentPage - 1) * parseInt(this.perPage);

        return {
            skip: skip,
            perPage: this.perPage,
            currentPage: this.currentPage,
        };

    },

    paginate(total) {
        this.lastPage = Math.ceil(total / this.perPage);
    },

};

module.exports = service;
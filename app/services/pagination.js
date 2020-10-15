// https://stackoverflow.com/questions/11272108/logic-behind-pagination-like-google
const path = require('path');

const service = {

    perPage: 1,
    currentPage: 1,
    totalPages: 1,
    startPage: 1,
    endPage: 1,

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

        currentPage = this.currentPage;
        totalPages = Math.ceil(total / this.perPage);

        startPage = (currentPage < 5) ? 1 : currentPage - 4;
        endPage = 8 + startPage;
        endPage = (totalPages < endPage) ? totalPages : endPage;
        diff = startPage - endPage + 8;
        startPage -= (startPage - diff > 0) ? diff : 0;

        this.totalPages = totalPages;
        this.startPage = startPage;
        this.endPage = endPage;
    },
};

module.exports = service;
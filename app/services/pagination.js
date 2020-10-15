// https://stackoverflow.com/questions/11272108/logic-behind-pagination-like-google
const path = require('path');

const service = {

    perPage: 1,
    currentPage: 1,
    totalPage: 1,
    startPage: 1,
    endPage: 1,
    hasFirstLast: false,

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
        totalPage = Math.ceil(total / this.perPage);

        if (currentPage > totalPage) {
            currentPage = totalPage;
        }

        startPage = (currentPage < 5) ? 1 : currentPage - 4;
        endPage = 8 + startPage;
        endPage = (totalPage < endPage) ? totalPage : endPage;
        diff = startPage - endPage + 8;
        startPage -= (startPage - diff > 0) ? diff : 0;

        this.currentPage = currentPage;
        this.totalPage = totalPage;
        this.startPage = startPage;
        this.endPage = endPage;
    },
};

module.exports = service;
// https://stackoverflow.com/questions/11272108/logic-behind-pagination-like-google
const service = {

  perPage: 1,
  currentPage: 1,
  totalPage: 1,
  startPage: 1,
  endPage: 1,
  hasFirstLast: false,

  init (url) {
    this.url = url
    this.currentPage = parseInt(global.REQUEST.query.page) || 1
    const skip = (this.currentPage - 1) * parseInt(this.perPage)

    return {
      skip: skip,
      perPage: this.perPage,
      currentPage: this.currentPage
    }
  },

  paginate (total) {
    var currentPage = this.currentPage
    var totalPage = Math.ceil(total / this.perPage)

    if (currentPage > totalPage) {
      currentPage = totalPage
    }

    var startPage = (currentPage < 5) ? 1 : currentPage - 4
    var endPage = 8 + startPage
    endPage = (totalPage < endPage) ? totalPage : endPage
    var diff = startPage - endPage + 8
    startPage -= (startPage - diff > 0) ? diff : 0

    this.currentPage = currentPage
    this.totalPage = totalPage
    this.startPage = startPage
    this.endPage = endPage
  }
}

module.exports = service

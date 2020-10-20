const path = require('path')

const middleware = {

  code404: (req, res, next) => {
    middleware.render(res, 404)
  },

  code500: (err, req, res, next) => {
    if (err) {
      console.log(err)
    }
    middleware.render(res, 505)
  },

  render (res, code) {
    const html = path.join('error', code.toString())

    res.status(code).render(html, {
      title: code + ' | Page Not Found'
    })
  }
}

module.exports = middleware

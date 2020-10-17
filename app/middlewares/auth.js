const middleware = {

  verify: (req, res, next) => {
    if (!req.session.user) {
      const env = process.env.NODE_ENV || 'development'

      if (env === 'production') {
        return res.redirect('/admin/login')
      }
    }
    next()
  }
}

module.exports = middleware

module.exports = (req, res, next) => {
  global.REQUEST = req
  global.RESPONSE = res

  res.locals.flash = function flash (name) {
    return req.flash(name)
  }

  next()
}

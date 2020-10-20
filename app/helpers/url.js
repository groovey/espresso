const url = require('url')

module.exports = {

  full () {
    const req = global.REQUEST

    return url.format({
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.originalUrl
    })
  }

}

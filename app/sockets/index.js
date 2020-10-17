const socket = require('socket.io')

module.exports = (server) => {
  const io = socket(server)
  require('./chat').init(io).start()
}

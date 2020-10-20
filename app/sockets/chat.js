const socket = {

  init (io) {
    this.io = io.of('/chat')
    return this
  },

  start () {
    this.io.use(function (socket, next) {
      // var handshake = socket.request
      next()
    })

    this.io.on('connection', function (socket) {
      console.log('Chat is connected')

      socket.on('message', function (msg) {
        console.log('message: ' + msg)
        this.emit('messages', {
          message: msg
        })
      })
    })
  }
}

module.exports = socket

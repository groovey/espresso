const socket = require("socket.io");

module.exports = (server) => {
    let io = socket(server);
    require('./chat').init(io).start();
};
const http = require('http');
const routes = require('./routes');
const hostname = '127.0.0.1';
const port = 3000;

console.log(routes.description);
const server = http.createServer(routes.handler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
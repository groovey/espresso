// Vanilla NODE.JS

const http = require('http');
const fs = require('fs');
// const url = require('url');
var json = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

var dt = require('./module');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.write('<div style="background-color:green">Test</div>');
    res.write('<div style="background-color:orange">Date time module = ' + dt.myDateTime() + '</div>');

    if (url == '/') {
        res.write('<form action="/message" name="form" method="POST">');
        res.write('<input name="message" value="">');
        res.write('<input type="submit" value="Send the message">');
        res.write('</form>');

        const msg = fs.readFileSync('message.txt');

        res.write('<div style="background-color:yellow">msg = ' + msg + '</div>');

        return res.end();
    } else if (url == '/message' && method == 'POST') {

        const body = [];
        req.on('data', (data) => {
            body.push(data);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];

            console.log(message);
            fs.writeFile('message.txt', message, (err) => {

            });
        });

        return res.end();
    }

    res.end('end of script');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
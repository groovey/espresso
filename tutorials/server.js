// Using node.js without express js (http://127.0.0.1:3000)

const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
var users = fs.readFileSync('./users.json', 'utf8');

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');    
    const url = req.url;
    const method = req.method;

    if (url == '/') {
        res.write('<form action="/message" name="form" method="POST">');
        res.write('<input name="message" value="">');
        res.write('<input type="submit" value="Send the message">');
        res.write('</form>');
        res.write('<div style="background-color:yellow">msg = ' + users + '</div>');

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
        });

        res.writeHead(302, {'Location': `http://${hostname}:${port}/`});
        res.end();
        // return res.end();
    }

    res.end('end of script');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
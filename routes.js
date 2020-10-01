const formidable = require('formidable');
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write('<div>URL = ' + req.url + '</div>');

    if (url == '/') {
        res.write('<h3>Welcome home</h3>');
        res.write('<ul>');
        res.write('<li><a href="/me">ME</a></li>');
        res.write('<li><a href="/learn-js">Learn JS</a></li>');
        res.write('<li><a href="/upload">File Upload</a></li>');
        res.write('</ul>');
        return res.end();
    } else if (url == '/me') {
        res.write('I am me!');
        return res.end();
    } else if (url == '/learn-js') {
        res.write('learn to write JS code');
        return res.end();
    } else if (url == '/upload') {

        res.write('<form action="process-upload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="data"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    } else if (url == '/process-upload') {

        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.data.path;
            var newpath = 'C:/DATA/nodejs/assets/' + files.data.name;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.write('<br/> path = ' + newpath);
                res.end();
            });
        });

    }

};

module.exports = {
    handler: requestHandler,
    description: 'The Route file information'
};
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const formidable = require('formidable');

app.get('/', (req, res) => {
    let form = `
    <form action="process" method="post" enctype="multipart/form-data">
    <input type="file" name="data"><br>
    <input type="submit">
    </form>
    `;   
    return res.send(form);
});

app.post('/process', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.data.path;
        var newpath = 'C:/DATA/nodejs/assets/' + files.data.name;
        fs.rename(oldpath, newpath, function(err) {
            if (!err) {
                res.write('File uploaded and moved!');
                res.write('path = ' + newpath);
                res.end();
            }
            res.redirect('/');            
        });
    });
});

app.listen(3000, () => {
    console.log('App is running at http://localhost:3000');
});
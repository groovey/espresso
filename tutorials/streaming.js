// NOTE: to run 
//     $ node tutorials/streaming.js
// Sample mp4
// https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4

const express = require('express');
const fs = require('fs');
const app = express();
const pathinfo = require('../app/helpers').pathinfo;
const path = require('path');

app.get('/', (req, res) => {

    let form = `
                <style>
                    video {
                        height: 100vh;
                        width: 100%;
                        object-fit: fill;
                        position: absolute;
                    }                    
                </style>

                <div class="row">
                    <div class="col-md-3 col-md-offset-3">
                        <video style="" id="videoPlayer" controls autoplay>
                            <source src="http://localhost:3000/v/sample" type="video/mp4">
                        </video>
                    </div>
                </div>`;

    res.send(form);

});

app.get('/v/:video', (req, res) => {

    const localPath = path.join(pathinfo.resources('videos'), req.params.video + '.mp4');

    const stat = fs.statSync(localPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ?
            parseInt(parts[1], 10) :
            fileSize - 1;

        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(localPath, {
            start,
            end
        });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };

        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(localPath).pipe(res);
    }
});

app.listen(3000, () => {
    console.log('App is running at http://localhost:3000');
});
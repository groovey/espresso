const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
const formidable = require('formidable')
const pathinfo = require('../app/helpers').pathinfo

app.get('/', (req, res) => {
  const form = `<form action="process" method="post" enctype="multipart/form-data">
                    <input type="file" name="data"><br>
                    <input type="submit">
                </form>`
  return res.send(form)
})

app.post('/process', (req, res) => {
  var form = new formidable.IncomingForm()

  form.parse(req, function (err, fields, files) {
    if (err) {
      console.log(err)
    }
    var oldpath = files.data.path
    var newpath = path.join(pathinfo.resources('docs'), files.data.name)

    console.log(newpath)

    fs.rename(oldpath, newpath, function (err) {
      if (!err) {
        res.write('File uploaded and moved!')
        res.write('path = ' + newpath)
        res.end()
      }
    })
  })
})

app.listen(3000, () => {
  console.log('App is running at http://localhost:3000')
})

const express = require('express');
const path = require('path');
const helper = require('../bootstrap/helper');
const chalk = require('chalk');

const router = express.Router();
const log = console.log;

router.get('/', (req, res) => {
    res.send('Home');
});

router.get('/contact', (req, res) => {
    var form = path.join(helper.path.base, 'resources', 'views', 'contact.html');
    res.sendFile(form);
});

router.post('/contact/process', (req, res) => {
    let body = req.body;
    let name = req.body.name;
    log(body);
    res.redirect('/contact');
});

module.exports = router;
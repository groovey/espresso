const express = require('express');
const chalk = require('chalk');

const router = express.Router();
const log = console.log;

router.get('/', (req, res) => {
    res.send('Home');
});

router.get('/contact', (req, res) => {
    var form = `<form action="/contact/process" method="POST" >
                    <input type="text" name="name">
                    <input type="submit" value="Contact Us!">
                </form>`;
    res.send(form);
});

router.post('/contact/process', (req, res) => {
    let body = req.body;
    let name = req.body.name;
    log(body);
    res.redirect('/contact');
});

module.exports = router;
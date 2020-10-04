const express = require('express');

const router = express.Router();
const log = console.log;

router.get('/', (req, res) => {
    res.send('Home');
});

router.get('/contact', (req, res) => {
    res.render('contact', {});
});

router.post('/contact/process', (req, res) => {
    let body = req.body;
    let name = req.body.name;
    log(body);
    res.redirect('/contact');
});

module.exports = router;
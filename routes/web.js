const express = require('express');
const mongo = require('../app/services/db').mongo;
const router = express.Router();

router.get('/test', (req, res) => {

    mongo().collection("products").find({}).toArray(function (err, datas) {
        console.log("Found the following records");
        console.log(datas);
        res.send(datas);
    });

});

router.get('/', (req, res) => {
    res.send('Home');
});

router.get('/contact', (req, res) => {
    res.render('contact', {});
});

router.post('/contact/process', (req, res) => {
    let body = req.body;
    let name = req.body.name;
    console.log(body);
    res.redirect('/contact');
});

module.exports = router;
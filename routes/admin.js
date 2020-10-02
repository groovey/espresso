const express = require('express');
const chalk = require('chalk');
const router = express.Router();
const log = console.log;

router.get('/admin/dashboard', (req, res) => {
    res.send('Home Dashboard');
});

router.get('/admin/product', (req, res) => {
    let form = '<form action="/product/add" method="post" ><input type="text" name="name"><input type="submit" value="Add Product"></form>';
    res.send(form);
});

router.post('/admin/product/add', (req, res) => {

    let body = req.body;
    let name = req.body.name;

    console.log(body);
    console.log(name);

    res.redirect('/admin/product');
});

module.exports = router;
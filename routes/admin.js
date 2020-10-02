const express = require('express');
const chalk = require('chalk');
const router = express.Router();
const log = console.log;

router.get('/dashboard', (req, res) => {
    res.send('Home Dashboard');
});

router.get('/product', (req, res) => {
    let form = `<form action="/admin/product/add" method="post" >
                    <input type="text" name="name">
                    <input type="submit" value="Add Product">
                </form>`;
    res.send(form);
});

router.post('/product/add', (req, res) => {

    let body = req.body;
    let name = req.body.name;

    console.log(body);
    console.log(name);

    res.redirect('/admin/product');
});

module.exports = router;
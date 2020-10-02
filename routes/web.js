const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home');
});

router.get('/product', (req, res) => {
    let form = '<form action="/product/add" method="post" ><input type="text" name="name"><input type="submit" value="Add Product"></form>';
    res.send(form);
});

router.post('/product/add', (req, res) => {

    let body = req.body;
    let name = req.body.name;

    console.log(body);
    console.log(name);

    res.redirect('/product');
});

module.exports = router;
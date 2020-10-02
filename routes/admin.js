const express = require('express');
const chalk = require('chalk');
const productController = require('../app/controllers/product');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.send('Home Dashboard');
});

router.get('/products', productController.index);
router.get('/products/create', productController.create);
router.post('/products', productController.store);
router.get('/products/:id', productController.show);
router.get('/products/:id/edit', productController.edit);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.destroy);

module.exports = router;
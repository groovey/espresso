const express = require('express');
const productController = require('../app/controllers/product');
const userController = require('../app/controllers/user');
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

router.get('/users', userController.index);
router.get('/users/create', userController.create);
router.post('/users', userController.store);
router.get('/users/:id', userController.show);
router.get('/users/:id/edit', userController.edit);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.destroy);

module.exports = router;
const router = require('express').Router();
const controller = require('../app/controllers');

router.get('/dashboard', (req, res) => {
    res.send('Home Dashboard');
});

router.get('/products', controller.product.index);
router.get('/products/create', controller.product.create);
router.post('/products', controller.product.store);
router.get('/products/:id', controller.product.show);
router.get('/products/:id/edit', controller.product.edit);
router.put('/products/:id', controller.product.update);
router.delete('/products/:id', controller.product.destroy);

router.get('/users', controller.user.index);
router.get('/users/create', controller.user.create);
router.post('/users', controller.user.store);
router.get('/users/:id', controller.user.show);
router.get('/users/:id/edit', controller.user.edit);
router.put('/users/:id', controller.user.update);
router.delete('/users/:id', controller.user.destroy);

module.exports = router;
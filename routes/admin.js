const router = require('express').Router();
const auth = require('@app/middlewares').auth.verify;
const controller = require('@app/controllers').admin;
const request = require('@app/requests');

router.get('/login', controller.auth.login);
router.post('/login', [request.auth.rules()], controller.auth.auth);
router.post('/logout', controller.auth.logout);

router.get('/', auth, controller.dashboard.redirect);
router.get('/dashboard', auth, controller.dashboard.index);

router.get('/users', auth, controller.user.index);
router.get('/users/create', auth, controller.user.create);
router.get('/users/:id', auth, controller.user.show);
router.get('/users/:id/edit', auth, controller.user.edit);
router.delete('/users/:id', auth, controller.user.destroy);
router.post('/users', [auth, ...request.user.store()], controller.user.store);
router.put('/users/:id', [auth, ...request.user.update()], controller.user.update);

router.get('/products', auth, controller.product.index);
router.get('/products/create', auth, controller.product.create);
router.get('/products/:id', auth, controller.product.show);
router.get('/products/:id/edit', auth, controller.product.edit);
router.delete('/products/:id', auth, controller.product.destroy);
router.post('/products', auth, controller.product.store);
router.put('/products/:id', auth, controller.product.update);

module.exports = router;
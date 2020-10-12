const router = require('express').Router();
const controller = require('@app/controllers').api.v1;
const cors = require('cors');

router.get('/v1/users', cors(), controller.user.index);

module.exports = router;
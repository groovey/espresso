const router = require('express').Router();
const controller = require('@app/controllers');

router.get('/test', (req, res) => {
    res.send(BASE_PATH);
});

router.get('/chat', controller.chat.index);

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
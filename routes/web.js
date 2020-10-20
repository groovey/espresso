const router = require('express').Router()
const controller = require('@app/controllers')

router.get('/test', (req, res) => {
  res.send(global.BASE_PATH)
})

router.get('/chat', controller.chat.index)

router.get('/', controller.home.index)

router.get('/contact', (req, res) => {
  res.render('contact', {})
})

router.post('/contact/process', (req, res) => {
  const body = req.body
  console.log(body)
  res.redirect('/contact')
})

module.exports = router

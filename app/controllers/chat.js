const path = require('path')
const validator = require('@app/helpers').validator
const request = require('@app/helpers').request
const User = require('@app/models').User

const controller = {

  index: (req, res) => {
    res.render(controller.view('chat'), {})
  },

  view (view) {
    return path.join(RESOURCES_PATH, 'views', view)
  }
}

module.exports = controller

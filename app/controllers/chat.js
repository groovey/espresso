const path = require('path')

const controller = {

  index: (req, res) => {
    res.render(controller.view('chat'), {})
  },

  view (view) {
    return path.join(global.RESOURCES_PATH, 'views', view)
  }
}

module.exports = controller

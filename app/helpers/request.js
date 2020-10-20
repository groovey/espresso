const request = {

  old (field, defined = '') {
    let value = global.REQUEST.flash('body.' + field)

    if (value.length > 0) {
      return value
    }

    value = global.REQUEST.body[field]

    if (value) {
      return value
    }

    return defined
  },

  session: {

    clear () {
      Object.entries(global.REQUEST.body).forEach(([key, value]) => {
        global.REQUEST.flash('body.' + key, '')
      })
    },

    reflash () {
      Object.entries(global.REQUEST.body).forEach(([key, value]) => {
        global.REQUEST.flash('body.' + key, value)
      })
    }

  }

}

module.exports = request

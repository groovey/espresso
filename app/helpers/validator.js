// The error module base on express-validator
// https: //express-validator.github.io/docs/index.html
const {
  body,
  validationResult
} = require('express-validator')

const service = {

  validate () {
    let msg
    results = validationResult(REQUEST)
    if (!results.isEmpty()) {
      msg = results.array()[0].msg

      if (REQUEST.url != '/login') {
        this.flashErrors(results.array())
      }
    }

    return msg
  },

  flashErrors (errors) {
    const datas = {}

    errors.forEach((element) => {
      if (!datas[element.param]) {
        datas[element.param] = element.msg
      }
    })

    Object.entries(datas).forEach(([key, value]) => {
      REQUEST.flash('error.' + key, value)
    })
  },

  error (field) {
    return REQUEST.flash('error.' + field)
  },

  required (field) {
    return body(field).not().isEmpty().trim().escape().withMessage(`The ${field} field is required.`)
  },

  email (field) {
    return body(field).isEmail().withMessage('Invalid email address')
  },

  min (field, value) {
    return body(field).isLength({
      min: value
    }).withMessage(`'The ${field} must be at least ${value}.`)
  },

  max (field, value) {
    return body(field).isLength({
      max: value
    }).withMessage(`'The ${field} may not be greater than ${value}.`)
  },

  alphanumeric (field) {
    return body(field).isAlphanumeric().withMessage(`'The ${field} may only contain letters and numbers.`)
  },

  confirm (field) {
    return body(field).custom((value, {
      req
    }) => {
      if (value !== req.body.password_confirmation) {
        return Promise.reject('Password confirmation does not match password')
      }

      return true
    })
  },

  // Still needs to be tested
  // https: //stackoverflow.com/questions/39703624/express-how-to-validate-file-input-with-express-validator
  image (field) {
    return body(field).custom((value, filename, {
      req
    }) => {
      var extension = (path.extname(filename)).toLowerCase()
      switch (extension) {
        case '.jpg':
          return '.jpg'
        case '.jpeg':
          return '.jpeg'
        case '.png':
          return '.png'
        default:
          return false
      }
    })
  }

}

module.exports = service

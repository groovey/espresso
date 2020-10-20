const path = require('path')

const service = {

  collection: '',
  multiplier: 1,

  require (file) {
    this.collection = require(path.join(global.BASE_PATH, 'database', 'seeders', file))
    return this.collection
  },

  factory () {
    return this
  },

  times (multiplier) {
    this.multiplier = multiplier
    return this
  },

  create () {
    const json = []

    for (let index = 1; index <= this.multiplier; index++) {
      json.push(this.collection.factory())
    }
    return json
  }
}

module.exports = service

const mongo = require('@app/services').mongo

const model = {

  table: 'users',

  id (id) {
    return mongo.id(id)
  },

  collection () {
    return mongo.connect().collection(this.table)
  }
}

module.exports = model

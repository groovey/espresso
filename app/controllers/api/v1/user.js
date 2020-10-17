const User = require('@app/models').User

const controller = {

  index: (req, res) => {
    User.collection()
      .find({})
      .toArray()
      .then((datas) => {
        const json = []
        datas.forEach((data) => {
          json.push({
            _id: data._id,
            name: data.name,
            email: data.email
          })
        })
        res.json(json)
      }).catch((err) => {
        console.log(err)
      })
  }
}

module.exports = controller

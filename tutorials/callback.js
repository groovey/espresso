const fs = require('fs')

class Tester {
  // async function. and thru a callback
  read (callback) {
    fs.readFile('users.json', (err, data) => {
      if (!err) {
        const json = JSON.parse(data)
        callback(json)
      }
    })
  }

  // async function. but thrue a this.do() function
  readFile () {
    fs.readFile('users.json', (err, data) => {
      if (!err) {
        const json = JSON.parse(data)
        this.do(json)
        return
      }
      this.do([])
    })
  }

  // process from the readfile function
  do (data) {
    console.log('readFile then do() data length =', data.length)
  }
}

const tester = new Tester()

// Via callback
tester.read((data) => {
  console.log('read data length =', data.length)
})

// Via this.do() function
tester.readFile()

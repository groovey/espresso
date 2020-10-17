// Testing modern javascripts

const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

// To read files, use this instead of require
var json = JSON.parse(fs.readFileSync('users.json', 'utf8'))

// Writing objects
const person = {
  name: 'Kim',
  age: 18,
  greet () {
    console.log('Greetings, ' + this.name)
  },
  hi: function () {
    console.log('Hi, ' + this.name)
  },
  hello: () => {
    console.log('Greetings, ' + this.name)
  }
}

person.greet()
person.hi()
person.hello()

// Array mapping
const sports = ['Basketball', 'Tennis']

console.log(sports.map(hobby => 'SPORTS : ' + hobby))

// Spread operator ...
// This is copy the person object
newPerson = {
  ...person
}
newPerson.name = 'Sam'
newPerson.greet()

// Rest operator
const toArray = (...args) => {
  return args
}
console.log(toArray(1, 'cat', 4, 'dog'))

// Shorter way to write functions
const addOneLonger = (a) => {
  return a + 1
}

const addOne = (a) => a + 1
console.log(addOne(5))
console.log(addOneLonger(5))

// Destructuring object
const {
  name,
  age
} = person
console.log('Name = ' + name)
console.log('Age = ' + age)

// Destructuring arrays
const [hobby1, hobby2] = sports
console.log('Hobby 1 = ' + hobby1)
console.log('Hobby 2 = ' + hobby2)

// Async code
setTimeout(() => {
  console.log('Async code is called after 20 secs.')
}, 20000)

// Promises
const fetchData = () => {
  console.log('Calling fetch data.')
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data has been fetch.')
    }, 2000)
  })

  return promise
}

setTimeout(() => {
  console.log('Start after 2 secs delay.')
  fetchData()
    .then(text => {
      console.log(text)
      return fetchData()
    })
    .then(text2 => {
      console.log(text2)
    })
}, 2000)

// Start
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

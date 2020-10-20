// Tutorial on javascript classes

// Class names - unnamed
// outputs: "Rectangle"
const Rectangle = class {
  constructor (height, width) {
    this.height = height
    this.width = width
  }
}
console.log(Rectangle.name)

// Class names - named
// outputs: "Rectangle2"
const box = class Rectangle2 {
  constructor (height, width) {
    this.height = height
    this.width = width
  }
}
console.log(box.name)

// Class with setter, geteter and this
// outputs: 200
class Square {
  constructor (height, width) {
    this.height = height
    this.width = width
  }

  // Getter (note, not a function)
  get area () {
    return this.calcArea()
  }

  calcArea () {
    return this.height * this.width
  }
}

const square = new Square(10, 10)
square.height = 20
console.log(square.area)

// Class binding
function Animal () {}

Animal.prototype.speak = function () {
  console.log('speak function called.')
  return this
}

Animal.eat = function () {
  console.log('eat function called.')
  return this
}

const obj = new Animal()
const speak = obj.speak
speak()

const eat = Animal.eat
eat()

// Public properties
class Table {
  // height;
  // width;
  constructor (width, height) {
    this.width = width
    this.height = height
  }
}
const table = new Table(64, 47)
console.log(table.width)
console.log(table.height)

// Combining all it up
class Cabinet {
  static find (id) {
    console.log('finding id=', id)

    this.id = id
    this.width = 111
    this.height = 222

    return this
  }

  save () {
    console.log('saving...')
    const width = this.width
    const height = this.height
    console.log('width =', width)
    console.log('height =', height)
    this.id = 5
    return this.id
  }
}

const cabinet = new Cabinet()
cabinet.width = 100
cabinet.height = 200
const id = cabinet.save()
console.log('saved id =', id)

const data = Cabinet.find(5)
console.log('found id =', data.id)
console.log('found width =', data.width)
console.log('found height =', data.height)

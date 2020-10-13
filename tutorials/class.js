// Tutorial on javascript classes

const {
    random
} = require("lodash");

// Class names - unnamed
// outputs: "Rectangle"
let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name);

// Class names - named
// outputs: "Rectangle2"
let box = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(box.name);


// Class with setter, geteter and this
// outputs: 200
class Square {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter (note, not a function)
    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Square(10, 10);
square.height = 20;
console.log(square.area);


// Class binding
function Animal() {}

Animal.prototype.speak = function () {
    console.log('speak function called.');
    return this;
};

Animal.eat = function () {
    console.log('eat function called.');
    return this;
};

let obj = new Animal();
let speak = obj.speak;
speak();

let eat = Animal.eat;
eat();

// Public properties
class Table {
    height = 0;
    width;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
let table = new Table(64, 47);
console.log(table.width);
console.log(table.height);


// Private properties using #
class Chair {
    #
    height = 0;#
    width;
    area;
    description = 'This is the chair description';
    constructor(width, height) {
        this.#width = width;
        this.#height = height;
        this.area = 300;
    }
    get width() {
        return this.#width;
    }
}
let chair = new Chair(78, 34);
console.log(chair.width);
console.log(chair.height);
console.log(chair.area);
console.log(chair.description);


// Combining all it up
class Cabinet {

    constructor() {}

    static find(id) {
        console.log('finding id=', id);

        this.id = id;
        this.width = 111;
        this.height = 222;

        return this;
    }

    save() {
        console.log('saving...');
        let width = this.width;
        let height = this.height;
        console.log('width =', width);
        console.log('height =', height);
        this.id = 5;
        return this.id;
    }
}

let cabinet = new Cabinet();
cabinet.width = 100;
cabinet.height = 200;
let id = cabinet.save();
console.log('saved id =', id)

let data = Cabinet.find(5);
console.log('found id =', data.id);
console.log('found width =', data.width);
console.log('found height =', data.height);
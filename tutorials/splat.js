const {
    body,
    validationResult
} = require('express-validator');


function auth() {
    console.log('auth is called');
}

function validator() {
    console.log('validator is called');
}


let splat = [validator(), body('username').isEmail(), ];

const test = [auth(), ...splat];


console.log(test);
require('module-alias/register')

const config = require('@config')

console.log(config.app.name)
console.log(config.app.env)
console.log(config.app.url)

const faker = require('faker')

const firstName = faker.name.firstName()
const lastName = faker.name.lastName()

const jobTitle = faker.name.jobTitle()
const prefix = faker.name.prefix()
const suffix = faker.name.suffix()
const jobArea = faker.name.jobArea()

const phone = faker.phone.phoneNumber()

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`)
console.log(`Job title: ${jobTitle}`)
console.log(`Job area: ${jobArea}`)
console.log(`Phone: ${phone}`)

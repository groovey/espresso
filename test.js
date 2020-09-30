const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from nodejs.');

console.log('Saving hello.txt file to the root folder.');
// Configure your ./.env  file

console.log('No value for APP_NAME yet:', process.env.APP_NAME);

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

console.log('Now the value for APP_NAME is:', process.env.APP_NAME);
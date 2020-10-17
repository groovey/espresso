module.exports = {
  name: process.env.APP_NAME || 'espresso',
  env: process.env.APP_ENV || 'development',
  url: process.env.APP_URL || 'localhost',
  debug: process.env.APP_DEBUG || false,
  timezone: 'Asia/Singapore',
  locale: 'en',
  socketio: 'enabled',
  graphql: 'enabled'
}

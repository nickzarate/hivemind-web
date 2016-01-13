if (env.DEV)
  module.exports = require('./configureStore.dev')
else
  module.exports = require('./configureStore.prod')

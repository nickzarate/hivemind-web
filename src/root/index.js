if (env.DEV)
  module.exports = require('./root.dev')
else
  module.exports = require('./root.prod')

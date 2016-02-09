/* Global Styles */
import 'app.scss'

/* <process.env.NODE_ENV> from Webpack's DefinePlugin */
if (process.env.NODE_ENV === 'production')
  module.exports = require('./Root.prod')
else
  module.exports = require('./Root.dev')

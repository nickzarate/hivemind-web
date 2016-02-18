/* Global Styles */
import 'app.scss'

/* <process.env.NODE_ENV> from Webpack's DefinePlugin */
module.exports = process.env.NODE_ENV === 'production' ?
  require('./Root.prod')
: require('./Root.dev')

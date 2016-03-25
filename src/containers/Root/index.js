/* global __DEV__ */

/* Global Styles */
// import 'assets/sass/app.scss'

module.exports = __DEV__ ?
  require('./Root.dev')
: require('./Root.prod')

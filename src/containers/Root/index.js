/* global __DEV__ */
module.exports = __DEV__ ?
  require('./Root.dev')
: require('./Root.prod')

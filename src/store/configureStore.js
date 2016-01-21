// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import reducers from 'reducers'

// export default function configureStore() {
//   const finalCreateStore = false ? compose(
//     applyMiddleware(thunk),
//     require('containers/DevTools').instrument()
//   )(createStore) : applyMiddleware(thunk)(createStore)
//   return finalCreateStore(reducers)
// }

/* <process.env.NODE_ENV> from Webpack's DefinePlugin */
if (process.env.NODE_ENV === 'production')
  module.exports = require('./configureStore.prod')
else
  module.exports = require('./configureStore.dev')


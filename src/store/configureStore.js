import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import DevTools from 'containers/DevTools'

// Inserts devtools. will need to alter for production.
export default function configureStore() {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )(createStore)
  return finalCreateStore(reducers)
}

// Old configureStore, saved for production.
// export default function configureStore() {
//   const createStoreWithMiddleware = applyMiddleware(
//     thunk
//   )(createStore)
//   return createStoreWithMiddleware(reducers)
// }


import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'

export default function configureStore() {
  const finalCreateStore = env.DEV ? compose(
    applyMiddleware(thunk),
    require('containers/DevTools').instrument()
  )(createStore) : applyMiddleware(thunk)(createStore)
  return finalCreateStore(reducers)
}

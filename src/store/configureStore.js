import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore)
  return createStoreWithMiddleware(reducers)
}

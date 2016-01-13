import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'

export default function configureStore() {
  const finalCreateStore = compose(
    applyMiddleware(thunk)
  )(createStore)
  return finalCreateStore(reducers)
}

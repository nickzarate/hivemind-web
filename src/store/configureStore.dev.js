import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import DevTools from 'containers/DevTools'

export default function configureStore() {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )(createStore)
  return finalCreateStore(reducers)
}

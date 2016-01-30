import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import DevTools from 'containers/DevTools'

export default function configureStore(history) {
  const reduxRouterMiddleware = syncHistory(history)

  const finalCreateStore = compose(
    // Middleware you want to use in development:
    applyMiddleware(reduxRouterMiddleware, thunk),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
  )(createStore)

  const store = finalCreateStore(reducers)

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store)

  // Enable Webpack hot module replacement for reducers
  if (module.hot)
    module.hot.accept('reducers', () => store.replaceReducer(require('reducers')))

  return store
}

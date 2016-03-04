import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import DevTools from 'containers/DevTools'
import persistState from 'redux-localstorage'
const reduxRouterMiddleware = syncHistory(browserHistory)

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk, reduxRouterMiddleware),
      persistState(['category', 'question', 'answer']),
      DevTools.instrument()
    )
  )

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store)

  // Enable Webpack hot module replacement for reducers
  if (module.hot)
    module.hot.accept('reducers', () =>
      store.replaceReducer(require('reducers'))
    )

  return store
}

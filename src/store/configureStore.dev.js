import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import DevTools from 'containers/DevTools'
import persistState from 'redux-localstorage'

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      persistState(['answer', 'category', 'question']),
      DevTools.instrument()
    )
  )

  // Enable Webpack hot module replacement for reducers
  if (module.hot)
    module.hot.accept('reducers', () =>
      store.replaceReducer(require('reducers').default)
    )

  return store
}

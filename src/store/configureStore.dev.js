import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import DevTools from 'containers/DevTools'
import persistState from 'redux-localstorage'
// import configSlicer from './configSlicer'

export default function configureStore(initialState) {
  // const localStorageConfig = {
  //   slicer: configSlicer
  // }

  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      persistState(['answer', 'category', 'question', 'survey']),//, localStorageConfig),
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

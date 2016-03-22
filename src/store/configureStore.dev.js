import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'
import persistState, { mergePersistedState } from 'redux-localstorage'
import adapter from 'redux-localstorage/lib/adapters/localStorage'
import filter from 'redux-localstorage-filter'
import promiseMiddleware from 'redux-promise-middleware'
import DevTools from 'containers/DevTools'

export default function configureStore() {
  const reducers = compose(
    mergePersistedState()
  )(rootReducer)

  const storage = compose(
    filter(['answer', 'category', 'question', 'forms.survey'])
  )(adapter(window.localStorage))

  const store = createStore(
    reducers,
    compose(
      applyMiddleware(promiseMiddleware(), thunk),
      persistState(storage),
      DevTools.instrument()
    )
  )

  // Enable Webpack hot module replacement for reducers
  // if (module.hot)
  //   module.hot.accept('reducers', () =>
  //     store.replaceReducer(require('reducers').default)
  //   )

  return store
}

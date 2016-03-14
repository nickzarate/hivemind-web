import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'
import persistState, { mergePersistedState } from 'redux-localstorage'
import adapter from 'redux-localstorage/lib/adapters/localStorage'
import filter from 'redux-localstorage-filter'

export default function configureStore(initialState) {
  const reducers = compose(
    mergePersistedState()
  )(rootReducer)

  const storage = compose(
    filter(['answer', 'category', 'question', 'forms.survey'])
  )(adapter(window.localStorage))

  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      persistState(storage)
    )
  )
}

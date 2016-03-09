import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import reducers from 'reducers'

export default function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      persistState(['answer', 'category', 'question'])
    )
  )
}

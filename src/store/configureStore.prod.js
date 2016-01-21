import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'redux-simple-router'
import thunk from 'redux-thunk'
import reducers from 'reducers'

export default function configureStore(hashHistory) {
  const reduxRouterMiddleware = syncHistory(hashHistory)

  const finalCreateStore = compose(
    // Middleware you want to use in production:
    applyMiddleware(reduxRouterMiddleware, thunk),
    // Other store enhancers if you use any
  )(createStore)

  return finalCreateStore(reducers)
}

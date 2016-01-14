import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { Provider } from 'react-redux'
import { syncReduxAndRouter } from 'redux-simple-router'
import configureStore from 'store/configureStore'
import App from './App'

/* Containers */
import { Login, Home, Stats, Signup, Survey, Question } from 'containers'
const DevTools = env.DEV && require('containers/DevTools')

/* Components */
import Round from 'components/Round'
import NotFound from 'components/NotFound'


/* Routes */
const history = createHistory({ queryKey: false })
const store = configureStore()
syncReduxAndRouter(history, store)

export default (
  <Provider store={ store }>
    <div>
      <Router history={ history }>
        <Route  component={ App } path="/">
          <IndexRoute component={ Login } />
          <Route component={ Signup } path="signup" />
          <Route component={ Survey } path="survey" />
          <Route component={ Home } path="home" />
          <Route component={ Round } path="round">
            <IndexRoute component={ Question } />
          </Route>
          <Route component={ Stats } path="stats" />
          <Route component={ NotFound } path="*" />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>
)

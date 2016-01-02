import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory'

import { Provider } from 'react-redux'
import { syncReduxAndRouter } from 'redux-simple-router'

import { configureStore } from 'store'


/* Shell-Container */
import App from 'containers/App.jsx'

/* Pages */
import Index from 'components/Index'
import Login from 'components/Login'
import Home from 'components/Home'
import edQuestion from 'components/Questions'

/* Routes */
const history = createHistory({ queryKey: false })
const store = configureStore()
syncReduxAndRouter(history, store)

const ROUTES = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route  component={ App } path="/" >
        <IndexRoute component={ Index } />
        <Route component={ Login } path="Login" />
        <Route component={ Home } path="Home" />
        <Route component={ edQuestion } path="edQuestion" />
      </Route>
    </Router>
  </Provider>
)

render(
  ROUTES,
  document.getElementById('content')
)

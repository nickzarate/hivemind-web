import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory'

/* Shell-Container */
import App from 'containers/App'

/* Pages */
import Index from 'components/Index'
import Login from 'components/Login'

/* Routes */
const history = createHistory({ queryKey: false })
const ROUTES = (
  <Router history={ history }>
    <Route  component={ App } path="/" >
      <IndexRoute component={ Index } />
      <Route component={ Login } path="Login" />
    </Route>
  </Router>
)

render(
  ROUTES,
  document.getElementById('content')
)

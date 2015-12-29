import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { Provider } from 'react-redux'
import store from 'store'

/* Shell */
import App from 'containers/App'

/* Pages */
import Main from 'components/Main'
import Login from 'components/Login'

/* Routes */
let history = createHistory({ queryKey: false })
const INDEX = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route  component={ App } path="/" >
        <IndexRoute component={ Main } />
        <Route component={ Login } path="Login" />
      </Route>
    </Router>
  </Provider>
)

render(
  INDEX,
  document.getElementById('content')
)

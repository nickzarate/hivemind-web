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
import Round from 'components/Round'
import EdQuestion from 'components/EdQuestion'
import Stats from 'components/Stats'
import NotFound from 'components/NotFound'

/* Routes */
const history = createHistory({ queryKey: false })
const store = configureStore()
syncReduxAndRouter(history, store)

const ROUTES = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route  component={ App } path="/">
        <IndexRoute component={ Index } />
        <Route component={ Login } path="login" />
        <Route component={ Home } path="home" />
        <Route component={ Round } path="round">
          <Route component={ EdQuestion } path="edquestion" />
        </Route>
        <Route component={ NotFound } path="*" />
      </Route>
    </Router>
  </Provider>
)

render(
  ROUTES,
  document.getElementById('content')
)

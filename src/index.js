import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { Provider } from 'react-redux'
import { syncReduxAndRouter } from 'redux-simple-router'
import { configureStore } from 'store'

/* Containers */
import { App, Login, Home, Stats } from 'containers'

/* Components */
import Round from 'components/Round'
import EducationQuestion from 'components/EducationQuestion'
import NotFound from 'components/NotFound'

/* Routes */
const history = createHistory({ queryKey: false })
const store = configureStore()
syncReduxAndRouter(history, store)

const ROUTES = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route  component={ App } path="/">
        <IndexRoute component={ Login } />
        <Route component={ Home } path="home" />
        <Route component={ Round } path="round">
          <IndexRoute component={ EducationQuestion } />
        </Route>
        <Route component={ Stats } path="stats" />
        <Route component={ NotFound } path="*" />
      </Route>
    </Router>
  </Provider>
)

render(
  ROUTES,
  document.getElementById('content')
)

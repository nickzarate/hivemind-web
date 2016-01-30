import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createBrowserHistory'


/* Containers */
import App from 'containers/App'
import Login from 'containers/Login'
import Home from 'containers/Home'
import Stats from 'containers/Stats'
import Signup from 'containers/Signup'
import Survey from 'containers/Survey'
import Question from 'containers/Question'
import Round from 'containers/Round'
import DevTools from 'containers/DevTools'

/* Components */
import NotFound from 'components/NotFound'

/* Styles */
import 'app.scss'

const history = createHistory()
const store = configureStore(history)

const INDEX = (
  <Provider store={ store }>
    <div>
      <Router history={ history }>
        <Route path="/" component={ App } >
          <IndexRoute component={ Login } />
          <Route path="signup" component={ Signup } />
          <Route path="survey" component={ Survey } />
          <Route path="home" component={ Home } />
          <Route path="round" component={ Round }>
            <IndexRoute component={ Question } />
          </Route>
          <Route path="stats" component={ Stats } />
          <Route path="*" component={ NotFound } />
        </Route>
      </Router>
      { IN_DEV_MODE ? <DevTools /> : null }
    </div>
  </Provider>
)


render(
  INDEX,
  document.getElementById('content')
)


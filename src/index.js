import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import createHistory from 'history/lib/createHashHistory'
import configureStore from 'store/configureStore'

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
import 'app.scss';

/* Routes */
const hashHistory = createHistory({ queryKey: false })
const store = configureStore(hashHistory)

const INDEX = (
  <Provider store={ store }>
    <div>
      <Router history={ hashHistory }>
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
      { env.DEV ? <DevTools /> : null }
    </div>
  </Provider>
)


render(
  INDEX,
  document.getElementById('content')
)


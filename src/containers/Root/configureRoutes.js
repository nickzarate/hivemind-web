import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

/* Pages */
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import Home from 'pages/Home'
import Round from 'pages/Round'
import Question from 'pages/Question'
import Stats from 'pages/Stats'
import NotFound from 'pages/NotFound'

export default function configureRoutes(history) {
  const App = ({ children }) => children
  return (
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Login } />
        <Route path="signup" component={ Signup } />
        <Route path="home" component={ Home } />
        <Route path="round" component={ Round }>
          <IndexRoute component={ Question } />
        </Route>
        <Route path="stats" component={ Stats } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  )
}

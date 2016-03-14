import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

/* Pages */
import Landing from 'pages/Landing'
import Signup from 'pages/Signup'
import Home from 'pages/Home'
import Round from 'pages/Round'
import Question from 'pages/Question'
import Stats from 'pages/Stats'
import NotFound from 'pages/NotFound'

/* Containers */
import SurveyPage1 from 'containers/Survey/Page1'
import SurveyPage2 from 'containers/Survey/Page2'
import SurveyPage3 from 'containers/Survey/Page3'
import SurveyPage4 from 'containers/Survey/Page4'

/* Components */
import SurveyInstructions from 'components/Survey/Instructions'

export default function Routes() {
  return (
    <Router history={ browserHistory }>
      <Route path="/">
        <IndexRoute component={ Landing } />
        <Route path="signup" component={ Signup }>
          <IndexRoute component={ SurveyInstructions } />
          <Route path="1" component={ SurveyPage1 } />
          <Route path="2" component={ SurveyPage2 } />
          <Route path="3" component={ SurveyPage3 } />
          <Route path="4" component={ SurveyPage4 } />
        </Route>
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

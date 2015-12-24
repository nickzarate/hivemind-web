import React from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

/* Shell */
import App from 'components/App';

/* Pages */
import Main from 'components/Main';

import Login from 'components/Login';

/* Routes */
let history = createHistory({ queryKey: false });
const INDEX = (
  <Router history={ history }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Main } />
      <Route path="Login" component={ Login } />
    </Route>
  </Router>
);

render(
  INDEX,
  document.getElementById('content')
);

import React from 'react'
import { Provider } from 'react-redux'
import configureRoutes from './configureRoutes'
import configureStore from 'store/configureStore'
import createHistory from 'history/lib/createBrowserHistory'
import DevTools from 'containers/DevTools'

const history = createHistory()

export default (
  <Provider store={ configureStore(history) }>
    <div>
      { configureRoutes(history) }
      <DevTools />
    </div>
  </Provider>
)

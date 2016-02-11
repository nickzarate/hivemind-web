import React from 'react'
import { Provider } from 'react-redux'
import Routes from './Routes'
import configureStore from 'store/configureStore'
import { browserHistory as history } from 'react-router'
import DevTools from 'containers/DevTools'

export default (
  <Provider store={ configureStore(history) }>
    <div>
      <Routes history={ history } />
      <DevTools />
    </div>
  </Provider>
)
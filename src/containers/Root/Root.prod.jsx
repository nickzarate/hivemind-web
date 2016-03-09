import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Routes from './Routes'
import configureStore from 'store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

export default (
  <Provider store={ store }>
    <Routes history={ history } />
  </Provider>
)

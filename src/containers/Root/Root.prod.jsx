import React from 'react'
import { Provider } from 'react-redux'
import Routes from './Routes'
import configureStore from 'store/configureStore'
import { browserHistory as history } from 'react-router'

export default (
  <Provider store={ configureStore(history) }>
    <Routes history={ history } />     
  </Provider>
)

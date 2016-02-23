import React from 'react'
import { Provider } from 'react-redux'
import Routes from './Routes'
import configureStore from 'store/configureStore'
import DevTools from 'containers/DevTools'

export default (
  <Provider store={ configureStore() }>
    <div>
      <Routes />
      <DevTools />
    </div>
  </Provider>
)

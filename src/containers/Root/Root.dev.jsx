import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import Routes from './Routes'
import DevTools from 'containers/DevTools'
import styles from 'assets/sass/app.scss'


export default function Root({ store, history }) {
  return (
    <Provider store={ store }>
      <div className={ styles.app }>
        <Router history={ history } routes={ Routes } />
        <DevTools />
      </div>
    </Provider>
  )
}

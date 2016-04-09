import React from 'react'
import classNames from 'classnames'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import Routes from './Routes'
import DevTools from 'containers/DevTools'
import styles from 'assets/sass/app.scss'


export default function Root({ className, store, history, ...props }) {
  const classes = classNames(className, 'container', styles.app);
  return (
    <Provider store={ store }>
      <div { ...props } className={ classes }>
        <Router history={ history } routes={ Routes } />
        <DevTools />
      </div>
    </Provider>
  )
}

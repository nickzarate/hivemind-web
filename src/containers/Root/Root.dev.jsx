import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import Routes from './Routes'
import DevTools from 'containers/DevTools'
import styles from 'assets/sass/app.scss'


<<<<<<< HEAD
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
=======
export default (
  <Provider store={ store }>
    <div className={ styles.app }>
      <Routes history={ history } />
      <DevTools />
    </div>
  </Provider>
)
>>>>>>> 6996b470c6ab294138a23025d24bb899bd41bf65

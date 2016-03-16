import { take, call, put } from 'redux-saga/effects'
import { setMessage } from 'actions/tooltip'
import { browserHistory } from 'react-router'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export function* watchLoginFlow() {
  Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  while (true) { // eslint-disable-line no-constant-condition

    // LOG IN USER
    while (!Parse.User.current()) {
      browserHistory.push('/')
      const action = yield take('LOGIN_ASYNC')

      try {
        yield call(Parse.User.logIn, action.payload.email, action.payload.password)
        browserHistory.push('/home')
      } catch(error) {
        yield put(setMessage('Error: ' + error.code + ' ' + error.message))
      }
    }

    // LOG OUT USER
    if (window.location.pathname === '/') {
      browserHistory.push('/home')
    }
    yield take('LOGOUT_ASYNC')
    yield call(Parse.User.logOut)
  }
}

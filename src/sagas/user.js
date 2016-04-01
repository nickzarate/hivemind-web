import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { browserHistory } from 'react-router'
import { take, call, put, select, fork } from 'redux-saga/effects'
import { setTooltipMessage } from 'reducers/tooltip'
import { getLoginCredentials } from 'selectors/loginCredentials'
import { LOGIN, LOGOUT } from 'reducers/user'


export default function* fireUserSagas() {
  Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  yield fork(watchLoginFlow)
}

function* watchLoginFlow() {
  while (true) { // eslint-disable-line no-constant-condition
    // LOG IN USER
    while (!Parse.User.current()) {
      browserHistory.push('/')
      yield take(LOGIN)
      const login = yield select(getLoginCredentials)

      try {
        yield call(Parse.User.logIn, login.email, login.password)
        browserHistory.push('/home')
      } catch(error) {
        yield put(setTooltipMessage('Error: ' + error.code + ' ' + error.message))
      }
    }

    // LOG OUT USER
    if (window.location.pathname === '/') {
      browserHistory.push('/home')
    }
    yield take(LOGOUT)
    yield call(Parse.User.logOut)
  }
}

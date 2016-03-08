import { setMessage, setTarget } from './tooltip'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { browserHistory } from 'react-router'

/*
 *  Login the user and go to the home page
 */
export function asyncLogin() {
  return (dispatch, getState) => {
    const { forms: { login } } = getState()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    Parse.User.logIn(login.email, login.password, {
      success() {
        browserHistory.push('/home')
      },
      error(user, error) {
        dispatch(setMessage('Error: ' + error.code + ' ' + error.message))
      }
    })
  }
}

/*
 *  Sign up a new user with the given email and go to the home page
 */
export function asyncHandleSignup() {
  return (dispatch, getState) => {
    const { forms: { signup } } = getState()
    let newUser = new Parse.User()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)

    // Validation
    if (signup.email.length === 0) {
      dispatch(setMessage('All fields must be filled.'))
      dispatch(setTarget('email'))
      return
    }
    else if (signup.password.length === 0) {
      dispatch(setMessage('All fields must be filled.'))
      dispatch(setTarget('password'))
      return
    }
    else if (signup.passwordConfirm.length === 0) {
      dispatch(setMessage('All fields must be filled.'))
      dispatch(setTarget('passwordConfirm'))
      return
    }
    else if (signup.password.length < 6) {
      dispatch(setMessage('Password must be at least 6 characters long.'))
      dispatch(setTarget('password'))
      return
    } else if (signup.password !== signup.passwordConfirm) {
      dispatch(setMessage('Passwords do not match, try again.'))
      dispatch(setTarget('passwordConfirm'))
      return
    }

    newUser.set('username', signup.email)
    newUser.set('email', signup.email)
    newUser.set('password', signup.password)
    newUser.set('unlockedCategories', [])
    newUser.set('categoryInformation', {})
    newUser.set('points', 0)
    newUser.signUp(null, {
      success() {
        browserHistory.push('/survey')
      },
      error(user, error) {
        dispatch(setMessage('Error: ' + error.code + ' ' + error.message))
      }
    })
  }
}

export function logOut() {
  return () => {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    Parse.User.logOut()
    browserHistory.push('/')
  }
}

import { SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN } from 'constants'
import { handleError } from './error'

export function setUserEmail(email) {
  return {
    type: SET_USER_EMAIL,
    email: email
  }
}

export function setUserPassword(password) {
  return {
    type: SET_USER_PASSWORD,
    password: password
  }
}

export function login(currentUser) {
  return {
    type: LOGIN,
    currentUser: currentUser
  }
}

/*
 *  Sign up a new user with the given email and go to the home page
 */
export function asyncSignup(Parse, pushPath) {
  return (dispatch, getState) => {
    const { user } = getState()
    let newUser = new Parse.User()
    newUser.set('username', user.email)
    newUser.set('email', user.email)
    newUser.set('password', user.password)
    console.log(user)
    setTimeout(() => {
      newUser.signUp(null, {
        success(currentUser) {
          console.log(currentUser)
          dispatch(login(currentUser))
          pushPath()
        },
        error(error) {
          dispatch(handleError(error))
        }
      })
    }, 3000)
  }
}

/*
 *  Login the user and go to the home page
 */
export function asyncLogin(Parse, pushPath) {
  return (dispatch, getState) => {
    const { user } = getState()
    console.log(user)
    setTimeout(() => {
      Parse.User.logIn(user.email, user.password, {
        success(currentUser) {
          console.log(currentUser)
          dispatch(login(currentUser))
          pushPath()
        },
        error(error) {
          dispatch(handleError(error))
        }
      })
    }, 3000)
  }
}

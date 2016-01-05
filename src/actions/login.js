import { SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN } from 'constants'

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

export function login(user) {
  return {
    type: LOGIN,
    user: user
  }
}

export function asyncLogin(Parse, email, password) {
  return dispatch => {
    setTimeout(() => {
      Parse.User.logIn(email, password, {
        success: function(user) {
          dispatch(login(user))
        },
        error: function(error) {
          console.log('Error: ' + error.code + ' ' + error.message)
        }
      })
    }, 3000)
  }
}

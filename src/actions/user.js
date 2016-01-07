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

export function login(currentUser) {
  return {
    type: LOGIN,
    currentUser: currentUser
  }
}

export function asyncLogin(Parse) {
  return (dispatch, getState) => {
    const { user } = getState()
    console.log('Parse:')
    console.log(Parse)
    console.log(user)
    setTimeout(() => {
      Parse.User.logIn(user.email, user.password, {
        success: function(user) {
          console.log(user)
          dispatch(login(user))
        },
        error: function(error) {
          console.log('Error: ' + error.code + ' ' + error.message)
        }
      })
    }, 3000)
  }
}

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

/*
 *  Login the user and go to the home page
 */
export function asyncLogin(Parse, pushPath) {
  return (dispatch, getState) => {
    const { user } = getState()
    console.log(user)
    setTimeout(() => {
      Parse.User.logIn(user.email, user.password).then(function(currentUser) {
        console.log(currentUser)
        dispatch(login(currentUser))
        pushPath()
      }, function(error) {
        console.log('Error: ' + error.code + ' ' + error.message)
      })
    }, 3000)
  }
}

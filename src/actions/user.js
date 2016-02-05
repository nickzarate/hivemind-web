import { SET_ERROR_MESSAGE } from 'constants'

export function setErrorMessage(error) {
  return {
    type: SET_ERROR_MESSAGE,
    payload: {
      errorMessage: 'Error: ' + error.code + ' ' + error.message
    }
  }
}

/*
 *  Sign up a new user with the given email and go to the home page
 */
export function asyncSignup(Parse, push, data) {
  return (dispatch) => {
    let newUser = new Parse.User()
    newUser.set('username', data.email)
    newUser.set('email', data.email)
    newUser.set('password', data.password)
    newUser.signUp(null, {
      success() {
        push()
      },
      error(user, error) {
        dispatch(setErrorMessage(error))
      }
    })
  }
}

/*
 *  Login the user and go to the home page
 */
export function asyncLogin(Parse, push, data) {
  return (dispatch) => {
    Parse.User.logIn(data.email, data.password, {
      success() {
        push()
      },
      error(user, error) {
        dispatch(setErrorMessage(error))
      }
    })
  }
}

import { SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN } from 'constants'

export function setUserEmail(email) {
  return {
    type: SET_USER_EMAIL,
    payload: {
      email: email
    }
  }
}

export function setUserPassword(password) {
  return {
    type: SET_USER_PASSWORD,
    payload: {
      password: password
    }
  }
}

export function login(currentUser) {
  return {
    type: LOGIN,
    payload: {
      currentUser: currentUser
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
      success(currentUser) {
        dispatch(login(currentUser))
        push()
      },
      error(error) {
        console.log('Error: ' + error.code + ' ' + error.message)
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
      success(currentUser) {
        dispatch(login(currentUser))
        push()
      },
      error(error) {
        console.log('Error: ' + error.code + ' ' + error.message)
      }
    })
  }
}

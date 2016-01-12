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
export function asyncSignup(Parse, pushPath) {
  return (dispatch, getState) => {
    const { user } = getState()
    let newUser = new Parse.User()
    newUser.set('username', user.email)
    newUser.set('email', user.email)
    newUser.set('password', user.password)
    console.log(user)
    newUser.signUp(null, {
      success(currentUser) {
        console.log(currentUser)
        dispatch(login(currentUser))
        pushPath()
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
export function asyncLogin(Parse, pushPath) {
  return (dispatch, getState) => {
    const { user } = getState()
    console.log(user)
    Parse.User.logIn(user.email, user.password, {
      success(currentUser) {
        console.log(currentUser)
        dispatch(login(currentUser))
        pushPath()
      },
      error(error) {
        console.log('Error: ' + error.code + ' ' + error.message)
      }
    })
  }
}

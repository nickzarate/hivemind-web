import { setErrorMessage } from 'actions/form'

/*
 *  Sign up a new user with the given email and go to the home page
 *  data = [email, password1, password2]
 */
export function asyncSignup(Parse, push, data) {
  return (dispatch) => {
    if (data[1] !== data[2]) {
      dispatch(setErrorMessage('Passwords don\'t match, try again!'))
      return
    }
    let newUser = new Parse.User()
    newUser.set('username', data[0])
    newUser.set('email', data[0])
    newUser.set('password', data[1])
    newUser.signUp(null, {
      success() {
        push()
      },
      error(user, error) {
        dispatch(setErrorMessage('Error: ' + error.code + ' ' + error.message))
      }
    })
  }
}

/*
 *  Login the user and go to the home page
 */
export function asyncLogin(Parse, push, data) {
  return (dispatch) => {
    Parse.User.logIn(data[0], data[1], {
      success() {
        push()
      },
      error(user, error) {
        dispatch(setErrorMessage('Error: ' + error.code + ' ' + error.message))
      }
    })
  }
}

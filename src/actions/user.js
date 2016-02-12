import { setErrorMessage } from 'actions/form'

/*
 *  Sign up a new user with the given email and go to the home page
 *  values = [email, password1, password2]
 */
export function asyncSignup(Parse, push, values) {
  return (dispatch) => {
    if (values[1] !== values[2]) {
      dispatch(setErrorMessage('Passwords don\'t match, try again!'))
      return
    }
    let newUser = new Parse.User()
    newUser.set('username', values[0])
    newUser.set('email', values[0])
    newUser.set('password', values[1])
    newUser.signUp(null, {
      success() {
        push('/home')
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
export function asyncLogin(Parse, push, values) {
  return (dispatch) => {
    Parse.User.logIn(values[0], values[1], {
      success() {
        push('/home')
      },
      error(user, error) {
        dispatch(setErrorMessage('Error: ' + error.code + ' ' + error.message))
      }
    })
  }
}

import { setMessage, setTarget } from './tooltip'

/*
 *  Login the user and go to the home page
 */
export function asyncLogin(Parse, push) {
  return (dispatch, getState) => {
    const { forms: { login } } = getState()
    Parse.User.logIn(login.email, login.password, {
      success() {
        push('/home')
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
export function asyncHandleSignup(Parse, push) {
  return (dispatch, getState) => {
    const { forms: { signup } } = getState()
    let newUser = new Parse.User()

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
        push('/survey')
      },
      error(user, error) {
        dispatch(setMessage('Error: ' + error.code + ' ' + error.message))
      }
    })
  }
}

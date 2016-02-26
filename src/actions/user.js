import { setErrorMessage } from 'actions/form'
import { actions } from 'react-redux-form'

/*
 *  Login the user and go to the home page
 */
export function asyncLogin(Parse, push, formIndex = 0) {
  return (dispatch, getState) => {
    const { forms: { login } } = getState()
    Parse.User.logIn(login.email, login.password, {
      success() {
        dispatch(actions.reset('login'))
        push('/home')
      },
      error(user, error) {
        dispatch(setErrorMessage('Error: ' + error.code + ' ' + error.message, formIndex))
      }
    })
  }
}

/*
 *  Sign up a new user with the given email and go to the home page
 *  values = [email, password1, password2]
 */
export function asyncSignup(Parse, push, formIndex = 0) {
  return (dispatch, getState) => {
    const { form } = getState()
    let values = form.values[formIndex]
    if (values[1] !== values[2]) {
      dispatch(setErrorMessage('Passwords don\'t match, try again!'), formIndex)
      return
    }
    let newUser = new Parse.User()
    newUser.set('username', values[0])
    newUser.set('email', values[0])
    newUser.set('password', values[1])
    newUser.set('unlockedCategories', [])
    newUser.set('categoryInformation', {})
    newUser.set('points', 0)
    newUser.signUp(null, {
      success() {
        push('/survey')
      },
      error(user, error) {
        dispatch(setErrorMessage('Error: ' + error.code + ' ' + error.message, formIndex))
      }
    })
  }
}

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
    const { forms: { signup } } = getState()
    let newUser = new Parse.User()
    newUser.set('username', signup.email)
    newUser.set('email', signup.email)
    newUser.set('password', signup.password)
    newUser.set('unlockedCategories', [])
    newUser.set('categoryInformation', {})
    newUser.set('points', 0)
    newUser.signUp(null, {
      success() {
        dispatch(actions.reset('signup'))
        push('/survey')
      },
      error(user, error) {
        dispatch(setErrorMessage('Error: ' + error.code + ' ' + error.message, formIndex))
      }
    })
  }
}

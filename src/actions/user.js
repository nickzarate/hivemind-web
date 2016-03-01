import { setMessage } from './tooltip'

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
export function asyncSignup(Parse, push) {
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
        push('/survey')
      },
      error(user, error) {
        dispatch(setMessage('Error: ' + error.code + ' ' + error.message))
      }
    })
  }
}

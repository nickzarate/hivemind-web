import { SET_USER_EMAIL, SET_USER_PASSWORD } from 'constants'

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

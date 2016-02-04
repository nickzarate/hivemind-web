import { SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN, SET_ERROR_MESSAGE, CLEAR, CLEAR_ERROR } from 'constants'
import update from 'react-addons-update'

const initialState = {
  email: '',
  password: '',
  currentUser: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
  case SET_USER_EMAIL:
    return update(state, {email: {$set: action.payload.email}})
  case SET_USER_PASSWORD:
    return update(state, {password: {$set: action.payload.password}})
  case LOGIN:
    return update(state, {currentUser: {$set: action.payload.currentUser}})
  case SET_ERROR_MESSAGE:
    return update(state, {errorMessage: {$set: action.payload.errorMessage}})
  case CLEAR_ERROR:
    return update(state, {errorMessage: {$set: null}})
  case CLEAR:
    return initialState
  default:
    return state
  }
}

import { SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN } from 'constants'
import update from 'react-addons-update'

const initialState = {
  email: '',
  password: '',
  currentUser: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
  case SET_USER_EMAIL:
    return update(state, {email: {$set: action.payload.email}})//set('email', action.payload.email)
  case SET_USER_PASSWORD:
    return update(state, {password: {$set: action.payload.password}})//state.set('password', action.payload.password)
  case LOGIN:
    return update(state, {currentUser: {$set: action.payload.currentUser}})//state.set('currentUser', action.payload.currentUser)
  default:
    return state
  }
}

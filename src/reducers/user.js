import { SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN } from 'constants'
import { fromJS } from 'immutable'

const initialState = fromJS({
  email: '',
  password: '',
  currentUser: null
})

export default function user(state = initialState, action) {
  switch (action.type) {
  case SET_USER_EMAIL:
    return state.set('email', action.payload.email)
  case SET_USER_PASSWORD:
    return state.set('password', action.payload.password)
  case LOGIN:
    return state.set('currentUser', action.payload.currentUser)
  default:
    return state
  }
}

import { SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN } from 'constants'
import { merge } from 'toolbox'

const initialState = {
  email: '',
  password: '',
  currentUser: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
  case SET_USER_EMAIL:
    return merge(
      state,
      { email: action.payload.email }
    )
  case SET_USER_PASSWORD:
    return merge(
      state,
      { password: action.payload.password }
    )
  case LOGIN:
    return merge(
      state,
      { currentUser: action.payload.currentUser }
    )
  default:
    return state
  }
}

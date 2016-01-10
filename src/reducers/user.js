import { SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN } from 'constants'

const initialState = {
  email: '',
  password: '',
  currentUser: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
  case SET_USER_EMAIL:
    return {
      email: action.email,
      password: state.password,
      currentUser: state.currentUser
    }
  case SET_USER_PASSWORD:
    return {
      email: state.email,
      password: action.password,
      currentUser: state.currentUser
    }
  case LOGIN:
    return {
      email: state.email,
      password: state.password,
      currentUser: action.currentUser
    }
  default:
    return state
  }
}

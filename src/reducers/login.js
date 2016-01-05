import { SET_USER_EMAIL, SET_USER_PASSWORD, LOGIN } from 'constants'

const initialState = {
  email: '',
  password: '',
  user: null
}

export default function login(state = initialState, action) {
  switch (action.type) {
  case SET_USER_EMAIL:
    return {
      email: action.email,
      password: state.password,
      user: state.user
    }
  case SET_USER_PASSWORD:
    return {
      email: state.email,
      password: action.password,
      user: state.user
    }
  case LOGIN:
    return {
      email: state.email,
      password: state.password,
      user: action.user
    }
  default:
    return state
  }
}

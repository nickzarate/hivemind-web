import { SET_USER_EMAIL, SET_USER_PASSWORD } from 'constants'

const initialState = {
  email: '',
  password: ''
}

export default function login(state = initialState, action) {
  switch (action.type) {
  case SET_USER_EMAIL:
    return { email: action.email, password: state.password }
  case SET_USER_PASSWORD:
    return { email: state.email, password: action.password }
  default:
    return state
  }
}

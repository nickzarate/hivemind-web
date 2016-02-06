import { SET_ERROR_MESSAGE, CLEAR } from 'constants'
import update from 'react-addons-update'

const initialState = {
  errorMessage: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
  case SET_ERROR_MESSAGE:
    return update(state, {errorMessage: {$set: action.payload.errorMessage}})
  case CLEAR:
    return initialState
  default:
    return state
  }
}

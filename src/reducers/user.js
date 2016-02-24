import { SET_ERROR_MESSAGE } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  errorMessage: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
  case SET_ERROR_MESSAGE:
    return update(state, {errorMessage: {$set: action.payload}})
  default:
    return state
  }
}

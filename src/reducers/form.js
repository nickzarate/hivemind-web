import { SET_ERROR_MESSAGE, UPDATE_VALUE, INITIALIZE_VALUES, CLEAR_VALUES } from 'constants'
import update from 'react-addons-update'

const initialState = {
  values: [],
  errorMessage: null
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case INITIALIZE_VALUES:
    return update(state, {values: {$set: action.payload.values}})
  case UPDATE_VALUE:
    return update(state, {values: {$splice: [[action.payload.index, 1, action.payload.value]]}})
  case CLEAR_VALUES:
    return update(state, {values: {$set: []}})
  case SET_ERROR_MESSAGE:
    return update(state, {errorMessage: {$set: action.payload.errorMessage}})
  default:
    return state
  }
}

import { SET_ERROR_MESSAGE, UPDATE_VALUE, INITIALIZE_DATA } from 'constants'
import update from 'react-addons-update'

const initialState = {
  data: [],
  errorMessage: null
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case INITIALIZE_DATA:
    return update(state, {data: {$set: action.payload.data}})
  case UPDATE_VALUE:
    return update(state, {data: {$splice: [[action.payload.index, 1, action.payload.value]]}})
  case SET_ERROR_MESSAGE:
    return update(state, {errorMessage: {$set: action.payload.errorMessage}})
  default:
    return state
  }
}

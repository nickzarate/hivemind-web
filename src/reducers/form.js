import { SET_ERROR_MESSAGE, SET_VALUE, INITIALIZE_VALUES, CLEAR_VALUES,
  CLEAR_ERRORS, INITIALIZE_ERROR_MESSAGE, SET_VALUES } from 'constants'
import update from 'react-addons-update'

const initialState = {
  values: [],
  errorMessages: []
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case INITIALIZE_VALUES:
    return update(state, {values: {$push: [action.payload.values]}})
  case SET_VALUE:
    return update(state, {values: {[action.payload.formIndex]: {$splice: [[action.payload.index, 1, action.payload.value]]}}})
  case CLEAR_VALUES:
    return update(state, {values: {$set: []}})
  case SET_VALUES:
    return update(state, {values: {$set: action.payload.values}})
  case INITIALIZE_ERROR_MESSAGE:
    return update(state, {errorMessages: {$push: [action.payload.errorMessage]}})
  case SET_ERROR_MESSAGE:
    return update(state, {errorMessages: {$splice: [[action.payload.formIndex, 1, action.payload.errorMessage]]}})
  case CLEAR_ERRORS:
    return update(state, {errorMessages: {$set: []}})
  default:
    return state
  }
}

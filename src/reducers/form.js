import { SET_ERROR_MESSAGE, SET_VALUE, INITIALIZE_VALUES, CLEAR_VALUES,
  CLEAR_ERRORS, INITIALIZE_ERROR_MESSAGE, SET_VALUES } from 'constants'
import update from 'react-addons-update'

const initialState = {
  errorMessages: [],
  values: []
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case CLEAR_ERRORS:
    return update(state, {errorMessages: {$set: []}})
  case CLEAR_VALUES:
    return update(state, {values: {$set: []}})
  case INITIALIZE_ERROR_MESSAGE:
    return update(state, {errorMessages: {$push: [action.errorMessage]}})
  case INITIALIZE_VALUES:
    return update(state, {values: {$push: [action.values]}})
  case SET_ERROR_MESSAGE:
    return update(state, {errorMessages: {$splice: [[action.formIndex, 1, action.errorMessage]]}})
  case SET_VALUE:
    return update(state, {values: {[action.formIndex]: {$splice: [[action.index, 1, action.value]]}}})
  case SET_VALUES:
    return update(state, {values: {$set: action.values}})
  default:
    return state
  }
}

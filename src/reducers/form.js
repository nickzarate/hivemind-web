import { SET_ERROR_MESSAGE, SET_VALUE, INITIALIZE_VALUES, CLEAR_VALUES,
  CLEAR_ERRORS, INITIALIZE_ERROR_MESSAGE, SET_VALUES } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  errorMessages: [],
  values: []
}

export default function form(state = initialState, action) {
  switch (action.type) {
  case CLEAR_ERRORS:
    return update(state, {errorMessages: {$set: []}})
  case CLEAR_VALUES:
    return update(state, {values: {$set: []}})
  case INITIALIZE_ERROR_MESSAGE:
    return update(state, {errorMessages: {$push: [action.payload]}})
  case INITIALIZE_VALUES:
    return update(state, {values: {$push: [action.payload]}})
  case SET_ERROR_MESSAGE:
    return update(state, {errorMessages: {$splice: [[action.payload.formIndex, 1, action.payload.errorMessage]]}})
  case SET_VALUE:
    return update(state, {values: {[action.payload.formIndex]: {$splice: [[action.payload.index, 1, action.payload.value]]}}})
  case SET_VALUES:
    return update(state, {values: {$set: action.payload}})
  default:
    return state
  }
}

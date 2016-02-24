import { DEPOSIT, WITHDRAW, SET_CURRENT_QUESTION, SET_BIN_VALUES, SET_BANK } from 'constants'
import update from 'react-addons-update'

const initialState = {
  bank: [],
  binValues: [],
  currentQuestion: null
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case DEPOSIT:
    return update(state, {binValues: {[action.payload.binsIndex]: {[action.payload.index]: {$apply: (value) => value + 1}}}})
  case SET_BANK:
    return update(state, {bank: {$set: action.payload}})
  case SET_BIN_VALUES:
    return update(state, {binValues: {$set: action.payload}})
  case SET_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: action.payload}})
  case WITHDRAW:
    return update(state, {bank: {[action.payload]: {$apply: (bank) => bank - 1}}})
  default:
    return state
  }
}

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
    return update(state, {binValues: {[action.binsIndex]: {[action.index]: {$apply: (value) => value + 1}}}})
  case SET_BANK:
    return update(state, {bank: {$set: action.bank}})
  case SET_BIN_VALUES:
    return update(state, {binValues: {$set: action.binValues}})
  case SET_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: action.currentQuestion}})
  case WITHDRAW:
    return update(state, {bank: {[action.bankIndex]: {$apply: (bank) => bank - 1}}})
  default:
    return state
  }
}

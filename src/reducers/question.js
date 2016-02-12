import { DEPOSIT, WITHDRAW, SET_CURRENT_QUESTION, SET_BIN_VALUES, SET_BANK } from 'constants'
import update from 'react-addons-update'

const initialState = {
  bank: 0,
  binValues: [],
  currentQuestion: null
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case WITHDRAW:
    return update(state, {bank: {$set: state.bank - 1}})
  case DEPOSIT:
    return update(state, {binValues: {$splice: [[action.payload.index, 1, state.binValues[action.payload.index] + 1]]}})
  case SET_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: action.payload.currentQuestion}})
  case SET_BIN_VALUES:
    return update(state, {binValues: {$set: action.payload.binValues}})
  case SET_BANK:
    return update(state, {bank: {$set: action.payload.bank}})
  default:
    return state
  }
}

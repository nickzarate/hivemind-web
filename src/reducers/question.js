import { DEPOSIT, WITHDRAW, SET_CURRENT_QUESTION, SET_POINT_ESTIMATE, RESET_BANK } from 'constants'
import default_question_config from 'assets/default_question_config.json'
import update from 'react-addons-update'

const initialState = {
  bank: default_question_config.NUM_CUBES,
  bins: Array(default_question_config.NUM_BINS).fill(0),
  pointEstimate: 0,
  currentQuestion: null
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case WITHDRAW:
    return update(state, {bank: {$set: state.bank - 1}})
  case DEPOSIT:
    return update(state, {bins: {$splice: [[action.payload.index, 1, state.bin[action.payload.index] + 1]]}})
  case SET_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: action.payload.currentQuestion}})
  case SET_POINT_ESTIMATE:
    return update(state, {pointEstimate: {$set: action.payload.pointEstimate}})
  case RESET_BANK:
    return initialState
  default:
    return state
  }
}

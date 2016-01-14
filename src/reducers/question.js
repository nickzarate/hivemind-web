import { DEPOSIT, WITHDRAW, SET_CURRENT_QUESTION, ESTIMATE, RESET_BANK } from 'constants'
import default_question_config from 'assets/default_question_config.json'

const initialState = {
  bank: default_question_config.NUM_CUBES,
  bins: Array(default_question_config.NUM_BINS).fill(0),
  pointEstimate: 0,
  currentQuestion: null
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case WITHDRAW:
    return {
      bank: state.bank - 1,
      bins: state.bins,
      pointEstimate: state.pointEstimate,
      currentQuestion: state.currentQuestion
    }
  case DEPOSIT:
    // Use slice so as not to unintentionally alter state
    let bins = state.bins.slice(0)
    bins[action.payload.index] += 1
    return {
      bank: state.bank,
      bins: bins,
      pointEstimate: state.pointEstimate,
      currentQuestion: state.currentQuestion
    }
  case SET_CURRENT_QUESTION:
    return {
      bank: state.bank,
      bins: state.bins,
      pointEstimate: state.pointEstimate,
      currentQuestion: action.payload.currentQuestion
    }
  case ESTIMATE:
    return {
      bank: state.bank,
      bins: state.bins,
      pointEstimate: action.payload.pointEstimate,
      currentQuestion: state.currentQuestion
    }
  case RESET_BANK:
    return initialState
  default:
    return state
  }
}

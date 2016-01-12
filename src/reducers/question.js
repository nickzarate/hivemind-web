import { DEPOSIT, WITHDRAW, SET_CURRENT_QUESTION, STARTING_CUBES, ESTIMATE, RESET_BANK } from 'constants'

const initialState = {
  bank: STARTING_CUBES,
  bins: [0,0,0,0,0,0,0,0,0],
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
    bins[action.index] += 1
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
      currentQuestion: action.currentQuestion
    }
  case ESTIMATE:
    return {
      bank: state.bank,
      bins: state.bins,
      pointEstimate: action.pointEstimate,
      currentQuestion: state.currentQuestion
    }
  case RESET_BANK:
    return initialState
  default:
    return state
  }
}

import { DEPOSIT, WITHDRAW, SET_CURRENT_QUESTION, SET_POINT_ESTIMATE, CLEAR, SET_BINS, SET_BANK, SET_HAS_ESTIMATED } from 'constants'
import update from 'react-addons-update'

const initialState = {
  bank: 0,
  bins: [],
  pointEstimate: 0,
  currentQuestion: null,
  hasEstimated: false
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case WITHDRAW:
    return update(state, {bank: {$set: state.bank - 1}})
  case DEPOSIT:
    return update(state, {bins: {$splice: [[action.payload.index, 1, state.bins[action.payload.index] + 1]]}})
  case SET_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: action.payload.currentQuestion}})
  case SET_POINT_ESTIMATE:
    return update(state, {pointEstimate: {$set: action.payload.pointEstimate}})
  case SET_BINS:
    return update(state, {bins: {$set: action.payload.bins}})
  case SET_BANK:
    return update(state, {bank: {$set: action.payload.bank}})
  case SET_HAS_ESTIMATED:
    return update(state, {hasEstimated: {$set: action.payload.hasEstimated}})
  case CLEAR:
    return initialState
  default:
    return state
  }
}

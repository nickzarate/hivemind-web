import { DEPOSIT, WITHDRAW, SET_CURRENT_QUESTION, SET_POINT_ESTIMATE, RESET_BANK, SET_BINS, SET_BANK } from 'constants'
import { fromJS, List } from 'immutable'

const initialState = fromJS({
  bank: 0,
  bins: [],
  pointEstimate: 0,
  currentQuestion: null
})

export default function question(state = initialState, action) {
  switch (action.type) {
  case WITHDRAW:
    return state.set('bank', state.get('bank') - 1)
  case DEPOSIT:
    return state.update('bins', list => list.update(action.payload.index, value => value + 1))
  case SET_CURRENT_QUESTION:
    return state.set('currentQuestion', action.payload.currentQuestion)
  case SET_POINT_ESTIMATE:
    return state.set('pointEstimate', action.payload.pointEstimate)
  case SET_BINS:
    return state.set('bins', List(action.payload.bins))
  case RESET_BANK:
    return initialState
  case SET_BANK:
    return state.set('bank', action.payload.bank)
  default:
    return state
  }
}

import { INCREMENT_CURRENT_QUESTION } from 'constants'

const initialState = {
  currentQuestion: 1
}

export default function round(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_CURRENT_QUESTION:
    return {
      currentQuestion: state.currentQuestion + 1
    }
  default:
    return state
  }
}

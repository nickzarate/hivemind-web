import { INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS } from 'constants'

const initialState = {
  numQuestions: 2
}

export default function home(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_NUM_QUESTIONS:
    return { numQuestions: state.numQuestions + action.amount }
  case DECREMENT_NUM_QUESTIONS:
    return { numQuestions: state.numQuestions - action.amount }
  default:
    return state
  }
}

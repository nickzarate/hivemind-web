import { INCREMENT_QUESTIONS, DECREMENT_QUESTIONS } from 'constants'

const initialState = {
  numQuestions: 2
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_QUESTIONS:
    return { numQuestions: state.numQuestions + action.amount }
  case DECREMENT_QUESTIONS:
    return { numQuestions: state.numQuestions - action.amount }
  default:
    return state
  }
}

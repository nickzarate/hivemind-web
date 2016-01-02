import { DEPOSIT, WITHDRAW } from 'constants'

const initialState = {
  cubeBank: 6,
  answers: [0,0,0,0,0,0,0,0,0]
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case WITHDRAW:
    return {
      cubeBank: state.cubeBank - 1,
      answers: state.answers
    }
  case DEPOSIT:
    var answers = state.answers
    answers[action.index] += 1
    return {
      cubeBank: state.cubeBank,
      answers: answers
    }
  default:
    return state
  }
}

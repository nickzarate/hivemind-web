import { DEPOSIT, WITHDRAW, SET_ABSTRACT_QUESTION, SET_CURRENT_QUESTION, STARTING_CUBES, ESTIMATE, RESET_BANK, IS_SUBMITTING } from 'constants'

const initialState = {
  bank: STARTING_CUBES,
  answers: [0,0,0,0,0,0,0,0,0],
  estimate: 0,
  abstractQuestion: {
    x1: 0,
    x2: 0,
    observationID: 0,
    answerText: ['','','','','','','','',''],
    correctAnswer: 0
  },
  currentQuestion: null
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case WITHDRAW:
    return {
      bank: state.bank - 1,
      answers: state.answers,
      estimate: state.estimate,
      abstractQuestion: state.abstractQuestion,
      currentQuestion: state.currentQuestion
    }
  case DEPOSIT:
    // Use slice so as not to unintentionally alter state
    let answers = state.answers.slice(0)
    answers[action.index] += 1
    return {
      bank: state.bank,
      answers: answers,
      estimate: state.estimate,
      abstractQuestion: state.abstractQuestion,
      currentQuestion: state.currentQuestion
    }
  case SET_ABSTRACT_QUESTION:
    let myQuestion = {
      x1: action.x1,
      x2: action.x2,
      observationID: action.observationID,
      answerText: action.answerText,
      correctAnswer: action.correctAnswer,
      currentQuestion: state.currentQuestion
    }
    return {
      bank: state.bank,
      answers: state.answers,
      estimate: state.estimate,
      abstractQuestion: myQuestion,
      currentQuestion: state.currentQuestion
    }
  case SET_CURRENT_QUESTION:
    return {
      bank: state.bank,
      answers: state.answers,
      estimate: state.estimate,
      abstractQuestion: state.abstractQuestion,
      currentQuestion: action.currentQuestion
    }
  case ESTIMATE:
    return {
      bank: state.bank,
      answers: state.answers,
      estimate: action.estimate,
      abstractQuestion: state.abstractQuestion,
      currentQuestion: state.currentQuestion
    }
  case IS_SUBMITTING:
    return {
      bank: state.bank,
      answers: state.answers,
      estimate: state.estimate,
      abstractQuestion: state.abstractQuestion,
      currentQuestion: state.currentQuestion
    }
  case RESET_BANK:
    return initialState
  default:
    return state
  }
}

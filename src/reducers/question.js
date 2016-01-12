import { DEPOSIT, WITHDRAW, SET_ABSTRACT_QUESTION, SET_CURRENT_QUESTION, STARTING_CUBES, ESTIMATE, RESET_BANK, IS_SUBMITTING } from 'constants'

const initialState = {
  bank: STARTING_CUBES,
  answers: [0,0,0,0,0,0,0,0,0],
  pointEstimate: 0,
  abstractQuestion: {
    x1: 0,
    x2: 0,
    observationId: 0,
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
      pointEstimate: state.pointEstimate,
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
      pointEstimate: state.pointEstimate,
      abstractQuestion: state.abstractQuestion,
      currentQuestion: state.currentQuestion
    }
  case SET_ABSTRACT_QUESTION:
    let myQuestion = {
      x1: action.x1,
      x2: action.x2,
      observationId: action.observationId,
      answerText: action.answerText,
      correctAnswer: action.correctAnswer,
      currentQuestion: state.currentQuestion
    }
    return {
      bank: state.bank,
      answers: state.answers,
      pointEstimate: state.pointEstimate,
      abstractQuestion: myQuestion,
      currentQuestion: state.currentQuestion
    }
  case SET_CURRENT_QUESTION:
    return {
      bank: state.bank,
      answers: state.answers,
      pointEstimate: state.pointEstimate,
      abstractQuestion: state.abstractQuestion,
      currentQuestion: action.currentQuestion
    }
  case ESTIMATE:
    return {
      bank: state.bank,
      answers: state.answers,
      pointEstimate: action.pointEstimate,
      abstractQuestion: state.abstractQuestion,
      currentQuestion: state.currentQuestion
    }
  case RESET_BANK:
    return initialState
  default:
    return state
  }
}

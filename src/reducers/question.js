import { DEPOSIT, WITHDRAW, SET_QUESTION } from 'constants'

const initialState = {
  bank: 6,
  answers: [0,0,0,0,0,0,0,0,0],
  question: {
    x1: 0,
    x2: 0,
    estimate: 0,
    observationID: 0,
    answerText: ['','','','','','','','',''],
    correctAnswer: 0
  }
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case WITHDRAW:
    return {
      bank: state.bank - 1,
      answers: state.answers,
      question: state.question
    }
  case DEPOSIT:
    var answers = state.answers
    answers[action.index] += 1
    return {
      bank: state.bank,
      answers: answers
    }
  case SET_QUESTION:
    var myQuestion = {
      x1: action.x1,
      x2: action.x2,
      estimate: action.estimate,
      observationID: action.observationID,
      answerTest: action.answerText,
      correctAnswer: action.correctAnswer
    }
    return {
      bank: state.bank,
      answers: state.answers,
      question: myQuestion
    }
  default:
    return state
  }
}

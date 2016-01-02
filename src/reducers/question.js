import { DEPOSIT, WITHDRAW, SET_QUESTION, STARTING_CUBES, ESTIMATE } from 'constants'

const initialState = {
  bank: STARTING_CUBES,
  answers: [0,0,0,0,0,0,0,0,0],
  estimate: 0,
  question: {
    x1: 0,
    x2: 0,
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
      estimate: state.estimate,
      question: state.question
    }
  case DEPOSIT:
    var answers = state.answers
    answers[action.index] += 1
    return {
      bank: state.bank,
      answers: answers,
      estimate: state.estimate,
      question: state.question
    }
  case SET_QUESTION:
    var myQuestion = {
      x1: action.x1,
      x2: action.x2,
      observationID: action.observationID,
      answerText: action.answerText,
      correctAnswer: action.correctAnswer
    }
    return {
      bank: state.bank,
      answers: state.answers,
      estimate: state.estimate,
      question: myQuestion
    }
  case ESTIMATE:
    return {
      bank: state.bank,
      answers: state.answers,
      estimate: action.estimate,
      question: state.question
    }
  default:
    return state
  }
}

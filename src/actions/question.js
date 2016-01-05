import { WITHDRAW, DEPOSIT, SET_QUESTION, ESTIMATE, RESET_BANK } from 'constants'

export function withdraw() {
  return {
    type: WITHDRAW
  }
}

export function deposit(index) {
  return {
    type: DEPOSIT,
    index: index
  }
}

export function estimate(estimate) {
  return {
    type: ESTIMATE,
    estimate: estimate
  }
}

export function setQuestion(question) {
  return {
    type: SET_QUESTION,
    x1: question.x1,
    x2: question.x2,
    observationID: question.observationID,
    answerText: question.answerText,
    correctAnswer: question.correctAnswer
  }
}

export function resetBank() {
  return {
    type: RESET_BANK
  }
}

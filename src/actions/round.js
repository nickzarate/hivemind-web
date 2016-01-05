import { INCREMENT_CURRENT_QUESTION, ADD_ESTIMATE, ADD_ANSWERS } from 'constants'

export function incrementCurrentQuestion() {
  return {
    type: INCREMENT_CURRENT_QUESTION
  }
}

export function addEstimate(estimate) {
  return {
    type: ADD_ESTIMATE,
    estimate: estimate
  }
}

export function addAnswers(answers) {
  return {
    type: ADD_ANSWERS,
    answers: answers
  }
}

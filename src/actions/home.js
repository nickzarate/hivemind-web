import { INCREMENT_QUESTIONS, DECREMENT_QUESTIONS } from 'constants'

export function incrementQuestions() {
  return {
    type: INCREMENT_QUESTIONS,
    amount: 1
  }
}

export function decrementQuestions() {
  return {
    type: DECREMENT_QUESTIONS,
    amount: 1
  }
}

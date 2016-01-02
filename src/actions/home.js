import { INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS } from 'constants'

export function incrementNumQuestions() {
  return {
    type: INCREMENT_NUM_QUESTIONS
  }
}

export function decrementNumQuestions() {
  return {
    type: DECREMENT_NUM_QUESTIONS
  }
}

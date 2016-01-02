import { INCREMENT_QUESTIONS_PER_ROUND, DECREMENT_QUESTIONS_PER_ROUND } from 'constants'

export function incrementQuestionsPerRound() {
  return {
    type: INCREMENT_QUESTIONS_PER_ROUND
  }
}

export function decrementQuestionsPerRound() {
  return {
    type: DECREMENT_QUESTIONS_PER_ROUND
  }
}

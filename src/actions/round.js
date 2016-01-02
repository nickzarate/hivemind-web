import { DECREMENT_REMAINING_QUESTIONS } from 'constants'

export function decrementRemainingQuestions() {
  return {
    type: DECREMENT_REMAINING_QUESTIONS
  }
}

import { createStructuredSelector } from 'reselect'

const binValues = (state) => state.answer.binValues
const outcomes = (state) => state.answer.outcomes
const outcomeNames = (state) => state.category.outcomeNames
const questionsPerRound = (state) => state.category.questionsPerRound
const currentRound = (state) => state.round.currentRound
const currentQuestion = (state) => state.round.currentQuestion

export default createStructuredSelector({
  binValues,
  outcomes,
  outcomeNames,
  questionsPerRound,
  currentRound,
  currentQuestion
})
//answer: binValues, outcomes
//category: outcomeNames, questionsPerRound
//round: currentRound, currentQuestion
//forms: estimates
//question: objectId

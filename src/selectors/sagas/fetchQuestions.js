import { createStructuredSelector } from 'reselect'

export default createStructuredSelector({
  outcomesToDisplay: (state) => state.category.outcomesToDisplay,
  covariatesToDisplay: (state) => state.category.covariatesToDisplay,
  numObservations: (state) => state.category.numObservations,
  categoryName: (state) => state.category.name,
  questionsPerRound: (state) => state.category.questionsPerRound
})

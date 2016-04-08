import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const dataSelector = (state) => state.stats.data
const indexSelector = (state) => state.stats.outcomeIndex
const covariateDataSelector = (state) => state.stats.covariateData
const winningsSelector = (state) => state.round.winnings

function getOutcomeRanges(category) {
  let outcomes = []
  for (let outcome of category.outcomes) {
    outcomes.push(outcome.range)
  }
  return outcomes
}

function getOutcomeNames(category) {
  let outcomeNames = []
  for (let outcome of category.outcomes) {
    outcomeNames.push(outcome.displayName)
  }
  return outcomeNames
}

function getCovariateRanges(category) {
  let covariateRanges = []
  for (let covariate of category.covariates) {
    covariateRanges.push(covariate.range)
  }
  return covariateRanges
}

export default createSelector(
  categorySelector,
  dataSelector,
  indexSelector,
  covariateDataSelector,
  winningsSelector,
  (category, data, outcomeIndex, covariateData, winnings) => {
    return {
      data,
      outcomeIndex,
      covariateData,
      winnings,
      outcomeRanges: getOutcomeRanges(category),
      outcomeNames: getOutcomeNames(category),
      covariateRanges: getCovariateRanges(category)
    }
  }
)

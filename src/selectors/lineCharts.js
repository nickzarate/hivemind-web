import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const dataSelector = (state) => state.stats.data
const indexSelector = (state) => state.stats.outcomeIndex
const covariateDataSelector = (state) => state.stats.covariateData
const winningsSelector = (state) => state.round.winnings

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
      covariateRanges: category.covariateRanges,
      outcomeRanges: category.outcomeRanges,
      outcomeNames: category.outcomeNames
    }
  }
)

import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
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
  (currentCategory, data, outcomeIndex, covariateData, winnings) => {
    return {
      data,
      outcomeIndex,
      covariateData,
      winnings,
      covariateRanges: currentCategory ? currentCategory.get('covariateRanges') : [],
      outcomeRanges: currentCategory ? currentCategory.get('outcomeRanges') : [],
      outcomeNames: currentCategory ? currentCategory.get('outcomeNames') : []
    }
  }
)

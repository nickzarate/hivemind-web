import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const dataSelector = (state) => state.stats.data
const indexSelector = (state) => state.stats.outcomeIndex
const covariateDataSelector = (state) => state.stats.covariateData

export default createSelector(
  categorySelector,
  dataSelector,
  indexSelector,
  covariateDataSelector,
  (currentCategory, data, outcomeIndex, covariateData) => {
    return {
      data,
      outcomeIndex,
      covariateData,
      covariateRanges: currentCategory ? currentCategory.get('covariateRanges') : [],
      outcomeRanges: currentCategory ? currentCategory.get('outcomeRanges') : [],
      outcomeNames: currentCategory ? currentCategory.get('outcomeNames') : []
    }
  }
)

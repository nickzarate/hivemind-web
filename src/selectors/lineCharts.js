import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const dataSelector = (state) => state.stats.data
const indexSelector = (state) => state.stats.outcomeIndex

export default createSelector(
  categorySelector,
  dataSelector,
  indexSelector,
  (currentCategory, data, outcomeIndex) => {
    return {
      data,
      outcomeIndex,
      covariateRanges: currentCategory ? currentCategory.get('covariateRanges') : [],
      outcomeRanges: currentCategory ? currentCategory.get('outcomeRanges') : [],
      outcomeNames: currentCategory ? currentCategory.get('outcomeNames') : []
    }
  }
)

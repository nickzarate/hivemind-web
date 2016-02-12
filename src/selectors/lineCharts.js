import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const dataSelector = (state) => state.stats.data

export default createSelector(
  categorySelector,
  dataSelector,
  (currentCategory, data) => {
    return {
      data,
      covariateRanges: currentCategory ? currentCategory.get('covariateRanges') : [],
      outcomeRanges: currentCategory ? currentCategory.get('outcomeRanges') : []
    }
  }
)

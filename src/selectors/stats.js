import { createSelector } from 'reselect'

const statsSelector = (state) => state.stats
const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  statsSelector,
  categorySelector,
  (stats, currentCategory) => {
    let ranges = null
    if (currentCategory) {
      ranges = {
        covariates: currentCategory.get('covariateRanges'),
        outcomes: currentCategory.get('outcomeRanges')
      }
    }
    return {
      stats,
      ranges
    }
  }
)

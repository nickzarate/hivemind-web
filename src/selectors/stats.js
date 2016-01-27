import { createSelector } from 'reselect'

const statsSelector = (state) => state.stats
const categorySelector = (state) => state.round.questionInfo.currentCategory

export default createSelector(
  statsSelector,
  categorySelector,
  (stats, currentCategory) => ({
    stats,
    ranges: currentCategory.get('covariateRanges')
  })
)

import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const rangesSelector = (state) => state.forms.ranges

export default createSelector(
  categorySelector,
  rangesSelector,
  (currentCategory, ranges) => {
    return {
      outcomeNames: currentCategory.get('outcomeNames'),
      ranges
    }
  }
)

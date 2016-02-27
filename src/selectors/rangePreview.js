import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const rangesSelector = (state) => state.forms.ranges

export default createSelector(
  categorySelector,
  rangesSelector,
  (currentCategory, ranges) => {
    return {
      outcomeNames: currentCategory.get('outcomeNames'),
      numBins: currentCategory.get('numBins'),
      bank: currentCategory.get('tokens'),
      discrete: currentCategory.get('discrete'),
      ranges
    }
  }
)

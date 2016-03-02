import { createSelector } from 'reselect'

const roundSelector = (state) => state.round.currentCategory
const estimatesSelector = (state) => state.forms.estimates

export default createSelector(
  roundSelector,
  estimatesSelector,
  (currentCategory, estimates) => {
    return {
      categoryName: currentCategory.get('name'),
      bank: currentCategory.get('tokens'),
      numBins: currentCategory.get('numBins'),
      outcomeNames: currentCategory.get('outcomeNames'),
      estimates
    }
  }
)

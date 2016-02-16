import { createSelector } from 'reselect'

const roundSelector = (state) => state.round.currentCategory

export default createSelector(
  roundSelector,
  (currentCategory) => {
    return {
      categoryName: currentCategory.get('name'),
      bank: currentCategory.get('tokens'),
      numBins: currentCategory.get('numBins')
    }
  }
)

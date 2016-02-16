import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  categorySelector,
  (currentCategory) => {
    return {
      outcomeNames: currentCategory.get('outcomeNames'),
      numBins: currentCategory.get('numBins'),
      bank: currentCategory.get('tokens'),
      discrete: currentCategory.get('discrete')
    }
  }
)

import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const rangesForm = (state) => state.rangesForm

export default createSelector(
  categorySelector,
  rangesForm,
  (currentCategory, rangesForm) => {
    return {
      outcomeNames: currentCategory.get('outcomeNames'),
      numBins: currentCategory.get('numBins'),
      bank: currentCategory.get('tokens'),
      discrete: currentCategory.get('discrete'),
      rangesForm
    }
  }
)

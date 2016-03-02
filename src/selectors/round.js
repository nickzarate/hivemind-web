import { createSelector } from 'reselect'
import worthSelector from './points'

const roundSelector = (state) => state.round.currentCategory
const estimatesSelector = (state) => state.forms.estimates

export default createSelector(
  roundSelector,
  estimatesSelector,
  worthSelector,
  (currentCategory, estimates, worth) => {
    return {
      categoryName: currentCategory.get('name'),
      bank: currentCategory.get('tokens'),
      numBins: currentCategory.get('numBins'),
      outcomeNames: currentCategory.get('outcomeNames'),
      estimates,
      worth: worth.worth
    }
  }
)

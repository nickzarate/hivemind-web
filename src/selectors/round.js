import { createSelector } from 'reselect'
import worthSelector from './points'

const categorySelector = (state) => state.category
const estimatesSelector = (state) => state.forms.estimates

export default createSelector(
  categorySelector,
  estimatesSelector,
  worthSelector,
  (category, estimates, worth) => {
    return {
      categoryName: category.name,
      bank: category.tokens,
      numBins: category.numBins,
      outcomeNames: category.outcomeNames,
      estimates,
      worth: worth.worth
    }
  }
)

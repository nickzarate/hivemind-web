import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const estimatesSelector = (state) => state.forms.estimates

export default createSelector(
  categorySelector,
  estimatesSelector,
  (currentCategory, estimates) => {
    return {
      outcomeNames: currentCategory ? currentCategory.get('outcomeNames') : [],
      estimates
    }
  }
)

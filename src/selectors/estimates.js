import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  categorySelector,
  (currentCategory) => {
    return {
      outcomeNames: currentCategory ? currentCategory.get('outcomeNames') : []
    }
  }
)

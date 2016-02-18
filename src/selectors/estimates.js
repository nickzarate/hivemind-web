import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  categorySelector,
  (currentCategory) => {
    return {
      placeholders: currentCategory ? currentCategory.get('outcomeNames') : [],
      types: currentCategory ? Array(currentCategory.get('outcomeNames').length).fill('number') : [],
      discrete: currentCategory ? currentCategory.get('discrete') : []
    }
  }
)

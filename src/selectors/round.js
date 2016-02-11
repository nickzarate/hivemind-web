import { createSelector } from 'reselect'

const roundSelector = (state) => state.round.currentCategory

export default createSelector(
  roundSelector,
  (currentCategory) => {
    return {
      currentCategory,
      categoryName: currentCategory ? currentCategory.get('name') : '',
      bank: currentCategory ? currentCategory.get('tokens') : 0
    }
  }
)

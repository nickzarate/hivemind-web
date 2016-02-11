import { createSelector } from 'reselect'

const categoriesSelector = (state) => state.round.categories

export default createSelector(
  categoriesSelector,
  (categories) => ({
    categories
  })
)

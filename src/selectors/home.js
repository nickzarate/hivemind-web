import { createSelector } from 'reselect'

const homeSelector = (state) => state.round.categories

export default createSelector(
  homeSelector,
  (categories) => ({
    categories
  })
)

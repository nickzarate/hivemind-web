import { createSelector } from 'reselect'

const categoryNamesSelector = (state) => state.round.categoryNames

export default createSelector(
  categoryNamesSelector,
  (categoryNames) => ({
    categoryNames
  })
)

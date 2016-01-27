import { createSelector } from 'reselect'

const roundSelector = (state) => state.round

export default createSelector(
  roundSelector,
  (round) => ({
    round
  })
)

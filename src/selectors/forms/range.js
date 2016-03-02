import { createSelector } from 'reselect'

const rangesSelector = (state) => state.forms.ranges

export default createSelector(
  rangesSelector,
  (ranges) => ({
    ranges
  })
)

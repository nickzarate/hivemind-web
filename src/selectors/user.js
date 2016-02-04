import { createSelector } from 'reselect'

const userSelector = (state) => state.user

export default createSelector(
  userSelector,
  (user) => ({
    user
  })
)

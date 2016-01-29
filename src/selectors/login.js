import { createSelector } from 'reselect'

const loginSelector = (state) => state.user

export default createSelector(
  loginSelector,
  (user) => ({
    user
  })
)

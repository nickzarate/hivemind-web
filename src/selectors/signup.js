import { createSelector } from 'reselect'

const signupSelector = (state) => state.signup

export default createSelector(
  signupSelector,
  (signup) => ({
    signup
  })
)

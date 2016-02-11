import { createSelector } from 'reselect'

const formSelector = (state) => state.form.errorMessage

export default createSelector(
  formSelector,
  (errorMessage) => ({
    errorMessage
  })
)

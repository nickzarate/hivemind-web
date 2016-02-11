import { createSelector } from 'reselect'

const formSelector = (state) => state.form

export default createSelector(
  formSelector,
  (form) => {
    return {
      values: form.values,
      errorMessage: form.errorMessage
    }
  }
)

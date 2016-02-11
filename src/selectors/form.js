import { createSelector } from 'reselect'

const formSelector = (state) => state.form

export default createSelector(
  formSelector,
  (form) => {
    return {
      data: form.data,
      errorMessage: form.errorMessage
    }
  }
)

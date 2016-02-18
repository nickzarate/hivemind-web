import { createSelector } from 'reselect'

const valuesSelector = (state) => state.form.values
const errorMessagesSelector = (state) => state.form.errorMessages

export default createSelector(
  valuesSelector,
  errorMessagesSelector,
  (values, errorMessages) => {
    return {
      values: values.length > 0 ? values : [[]],
      errorMessages: errorMessages.length > 0 ? errorMessages : [null]
    }
  }
)

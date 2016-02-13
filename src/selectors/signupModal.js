import { createSelector } from 'reselect'

const valuesSelector = (state) => state.form.values
const showSelector = (state) => state.modal.show

export default createSelector(
  valuesSelector,
  showSelector,
  (values, show) => ({
    values,
    show
  })
)

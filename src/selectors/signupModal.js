import { createSelector } from 'reselect'

const valuesSelector = (state) => state.form.values
const showModalSelector = (state) => state.modal.showModal

export default createSelector(
  valuesSelector,
  showModalSelector,
  (values, showModal) => ({
    values,
    showModal
  })
)

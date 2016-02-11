import { createSelector } from 'reselect'

const dataSelector = (state) => state.form.data
const showModalSelector = (state) => state.modal.showModal

export default createSelector(
  dataSelector,
  showModalSelector,
  (data, showModal) => ({
    data,
    showModal
  })
)

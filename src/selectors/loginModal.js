import { createSelector } from 'reselect'

const showModalSelector = (state) => state.modal.showModal

export default createSelector(
  showModalSelector,
  (showModal) => ({
    showModal
  })
)

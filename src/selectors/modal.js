import { createSelector } from 'reselect'

const modalSelector = (state) => state.modal

export default createSelector(
  modalSelector,
  (modal) => {
    return {
      showModal: modal.showModal
    }
  }
)

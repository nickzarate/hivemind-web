import { createSelector } from 'reselect'

const dataSelector = (state) => state.form.data
const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  dataSelector,
  showModalSelector,
  categorySelector,
  (data, showModal, currentCategory) => {
    return {
      data,
      showModal,
      instructions: currentCategory ? currentCategory.get('instructions') : ''
    }
  }
)

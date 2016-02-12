import { createSelector } from 'reselect'

const valuesSelector = (state) => state.form.values
const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  valuesSelector,
  showModalSelector,
  categorySelector,
  (values, showModal, currentCategory) => {
    return {
      values,
      showModal,
      instructions: currentCategory ? currentCategory.get('instructions') : ''
    }
  }
)

import { createSelector } from 'reselect'

const valuesSelector = (state) => state.form.values
const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.round.currentCategory
const unlockedSelector = (state) => state.round.unlocked

export default createSelector(
  valuesSelector,
  showModalSelector,
  categorySelector,
  unlockedSelector,
  (values, showModal, currentCategory, unlocked) => {
    return {
      values,
      showModal,
      unlocked: currentCategory ? unlocked[currentCategory.get('index')] : false,
      instructions: currentCategory ? currentCategory.get('instructions') : '',
      categoryName: currentCategory ? currentCategory.get('name') : ''
    }
  }
)

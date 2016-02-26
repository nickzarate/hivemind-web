import { createSelector } from 'reselect'

const valuesSelector = (state) => state.form.values
const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.round.currentCategory
const unlockedSelector = (state) => state.round.unlocked
const rangesFormSelector = (state) => state.forms.rangesForm

export default createSelector(
  valuesSelector,
  showModalSelector,
  categorySelector,
  unlockedSelector,
  rangesFormSelector,
  (values, showModal, currentCategory, unlocked, rangesForm) => {
    return {
      values,
      showModal,
      unlocked: currentCategory ? unlocked[currentCategory.get('index')] : false,
      instructions: currentCategory ? currentCategory.get('instructions') : '',
      categoryName: currentCategory ? currentCategory.get('name') : '',
      rangesForm
    }
  }
)

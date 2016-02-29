import { createSelector } from 'reselect'

const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.round.currentCategory
const unlockedSelector = (state) => state.round.unlocked
const rangesFormSelector = (state) => state.forms.rangesForm

export default createSelector(
  showModalSelector,
  categorySelector,
  unlockedSelector,
  rangesFormSelector,
  (showModal, currentCategory, unlocked, rangesForm) => {
    return {
      showModal,
      unlocked: currentCategory ? unlocked[currentCategory.get('index')] : false,
      instructions: currentCategory ? currentCategory.get('instructions') : '',
      categoryName: currentCategory ? currentCategory.get('name') : '',
      rangesForm
    }
  }
)

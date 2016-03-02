import { createSelector } from 'reselect'

const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.round.currentCategory
const unlockedSelector = (state) => state.round.unlocked

export default createSelector(
  showModalSelector,
  categorySelector,
  unlockedSelector,
  (showModal, currentCategory, unlocked) => {
    return {
      showModal,
      unlocked: currentCategory ? unlocked[currentCategory.get('index')] : false,
      categoryName: currentCategory ? currentCategory.get('name') : ''
    }
  }
)

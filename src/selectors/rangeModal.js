import { createSelector } from 'reselect'

const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.category
const unlockedSelector = (state) => state.round.unlocked

export default createSelector(
  showModalSelector,
  categorySelector,
  unlockedSelector,
  (showModal, category, unlocked) => {
    return {
      showModal,
      unlocked: unlocked[category.index]
    }
  }
)

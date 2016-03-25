import { createSelector } from 'reselect'

const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.category
const unlockedSelector = (state) => state.round.unlocked
const roundInstructionsSelector = (state) => state.category.roundInstructions

export default createSelector(
  showModalSelector,
  categorySelector,
  unlockedSelector,
  roundInstructionsSelector,
  (showModal, category, unlocked, roundInstructions) => {
    return {
      showModal,
      unlocked: unlocked[category.index],
      roundInstructions
    }
  }
)

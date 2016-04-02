import { createSelector } from 'reselect'

const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.category
const categoriesSelector = (state) => state.round.categories
const roundInstructionsSelector = (state) => state.category.roundInstructions

function getUnlocked(category, categories) {
  for (let cat of categories) {
    if (cat.name === category.name) {
      return cat.unlocked
    }
  }
}

export default createSelector(
  showModalSelector,
  categorySelector,
  categoriesSelector,
  roundInstructionsSelector,
  (showModal, category, categories, roundInstructions) => {
    return {
      showModal,
      unlocked: getUnlocked(category, categories),
      roundInstructions
    }
  }
)

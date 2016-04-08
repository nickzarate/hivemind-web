import { createSelector } from 'reselect'

const showModalSelector = (state) => state.modal.showModal
const categorySelector = (state) => state.category
const categoriesSelector = (state) => state.round.categories
const roundInstructionsSelector = (state) => state.category.roundInstructions

function getUnlocked(category, categories) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].name === category.name) {
      return categories[i].unlocked
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

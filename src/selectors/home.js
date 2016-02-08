import { createSelector } from 'reselect'

const categoriesSelector = (state) => state.round.categories
const modalSelector = (state) => state.round.showModal
const currentCategorySelector = (state) => state.round.currentCategory

export default createSelector(
  categoriesSelector,
  currentCategorySelector,
  modalSelector,
  (categories, currentCategory, showModal) => ({
    categories,
    currentCategory,
    showModal
  })
)

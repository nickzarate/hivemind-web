import { createSelector } from 'reselect'

const categoriesSelector = (state) => state.round.categories
const modalSelector = (state) => state.round.showModal
const currentCategorySelector = (state) => state.round.currentCategory
const errorMessageSelector = (state) => state.round.errorMessage

export default createSelector(
  categoriesSelector,
  currentCategorySelector,
  modalSelector,
  errorMessageSelector,
  (categories, currentCategory, showModal, errorMessage) => {
    let home = {
      categories,
      currentCategory,
      showModal,
      errorMessage
    }
    return {
      home
    }
  }
)

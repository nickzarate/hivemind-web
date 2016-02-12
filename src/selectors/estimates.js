import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const formSelector = (state) => state.form

export default createSelector(
  categorySelector,
  formSelector,
  (currentCategory, form) => {
    return {
      placeholders: currentCategory ? currentCategory.get('outcomeNames') : [],
      types: currentCategory ? Array(currentCategory.get('outcomeNames').length).fill('number') : [],
      errorMessage: form.errorMessage,
      values: form.values
    }
  }
)

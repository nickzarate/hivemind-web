import { createSelector } from 'reselect'

const valuesSelector = (state) => state.form.values
const showSelector = (state) => state.modal.show
const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  valuesSelector,
  showSelector,
  categorySelector,
  (values, show, currentCategory) => {
    return {
      values,
      show,
      instructions: currentCategory ? currentCategory.get('instructions') : ''
    }
  }
)

import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const binValuesSelector = (state) => state.question.binValues
const bankSelector = (state) => state.question.bank

export default createSelector(
  categorySelector,
  binValuesSelector,
  bankSelector,
  (currentCategory, binValues, bank) => {
    return {
      binText: currentCategory ? currentCategory.get('binText') : [],
      binValues,
      bank
    }
  }
)

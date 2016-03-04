import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const covariateValuesSelector = (state) => state.question.covariateValues

export default createSelector(
  covariateValuesSelector,
  categorySelector,
  (covariateValues, category) => {
    return {
      covariateValues: covariateValues,
      covariateNames: category.covariateNames,
      instructions: category.questionInstructions
    }
  }
)

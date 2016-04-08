import { createSelector } from 'reselect'

const questionSelector = (state) => state.question
const categorySelector = (state) => state.category

function getCovariates(question, category) {
  let covariates = []
  for (let covariate of category.covariates) {
    // Keep all values consistently strings when displayed
    let value = question[covariate.variableName].toString()
    if (covariate.labels) {
      for (let i = 0; i < covariate.values.length; i++) {
        if (Number(covariate.values[i]) === question[covariate.variableName]) {
          value = covariate.labels[i]
        }
      }
    }
    covariates.push({
      displayName: covariate.displayName,
      value
    })
  }
  return covariates
}

export default createSelector(
  questionSelector,
  categorySelector,
  (question, category) => ({
    covariates: getCovariates(question, category)
  })
)

import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const covariateValuesSelector = (state) => state.question.covariateValues

function getCovariateValues(values, covariateDataTypes) {
  let covariateValues = []
  for (let i = 0; i < covariateDataTypes.length; i++) {
    covariateValues.push(covariateDataTypes[i].labels ? covariateDataTypes[i].labels[values[i]] : values[i])
  }
  return covariateValues
}

export default createSelector(
  covariateValuesSelector,
  categorySelector,
  (covariateValues, category) => {
    return {
      covariateValues: getCovariateValues(covariateValues, category.covariateDataTypes),
      covariateNames: category.covariateNames
    }
  }
)

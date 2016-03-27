import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const tooltipSelector = (state) => state.tooltip

export default createSelector(
  categorySelector,
  tooltipSelector,
  (category, tooltip) => {
    return {
      categorySurveyInstructions: category.categorySurveyInstructions,
      allCovariateDataTypes: category.allCovariateDataTypes,
      allCovariateNames: category.allCovariateNames,
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target
    }
  }
)

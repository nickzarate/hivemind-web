import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const tooltipSelector = (state) => state.tooltip

export default createSelector(
  categorySelector,
  tooltipSelector,
  (category, tooltip) => {
    return {
      instructions: category.categorySurveyInstructions,
      covariateNames: category.covariateNames,
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target
    }
  }
)

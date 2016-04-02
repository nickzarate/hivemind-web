import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const estimatesSelector = (state) => state.forms.estimates
const tooltipSelector = (state) => state.tooltip

export default createSelector(
  categorySelector,
  estimatesSelector,
  tooltipSelector,
  (category, estimates, tooltip) => {
    return {
      estimates,
      outcomeNames: category.outcomeNames,
      outcomeDataTypes: category.outcomeDataTypes,
      questionInstructions: category.questionInstructions,
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target
    }
  }
)

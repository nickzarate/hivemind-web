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
      outcomeNames: category.outcomeNames,
      estimates,
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target
    }
  }
)

import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const estimatesSelector = (state) => state.forms.estimates
const tooltipSelector = (state) => state.tooltip

export default createSelector(
  categorySelector,
  estimatesSelector,
  tooltipSelector,
  (currentCategory, estimates, tooltip) => {
    return {
      outcomeNames: currentCategory ? currentCategory.get('outcomeNames') : [],
      estimates,
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target
    }
  }
)

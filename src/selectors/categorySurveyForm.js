import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const tooltipSelector = (state) => state.tooltip

export default createSelector(
  categorySelector,
  tooltipSelector,
  (currentCategory, tooltip) => {
    return {
      instructions: currentCategory ? currentCategory.get('categorySurveyInstructions') : '',
      covariateNames: currentCategory ? currentCategory.get('covariateNames') : [],
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target
    }
  }
)

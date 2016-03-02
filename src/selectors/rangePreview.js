import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const tooltipSelector = (state) => state.tooltip

export default createSelector(
  categorySelector,
  tooltipSelector,
  (currentCategory, tooltip) => {
    return {
      outcomeNames: currentCategory.get('outcomeNames'),
      numBins: currentCategory.get('numBins'),
      bank: currentCategory.get('tokens'),
      discrete: currentCategory.get('discrete'),
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target
    }
  }
)

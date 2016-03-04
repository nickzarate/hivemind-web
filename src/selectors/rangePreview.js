import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const tooltipSelector = (state) => state.tooltip

export default createSelector(
  categorySelector,
  tooltipSelector,
  (category, tooltip) => {
    return {
      outcomeNames: category.outcomeNames,
      numBins: category.numBins,
      bank: category.tokens,
      discrete: category.discrete,
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target
    }
  }
)

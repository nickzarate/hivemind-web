import { createSelector } from 'reselect'

const tooltipSelector = (state) => state.tooltip

export default createSelector(
  tooltipSelector,
  (tooltip) => {
    return {
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target === '' ? 'form' : target
    }
  }
)

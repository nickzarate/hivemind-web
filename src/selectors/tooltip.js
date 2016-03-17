import { createSelector } from 'reselect'

/* SELECTOR */
const tooltipSelector = (state) => state.tooltip
export const getTooltip = createSelector(
  tooltipSelector,
  (tooltip) => {
    return {
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target === '' ? 'form' : target
    }
  }
)

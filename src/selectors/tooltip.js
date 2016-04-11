import { createStructuredSelector } from 'reselect'

export default createStructuredSelector({
  tooltip: (state) => state.tooltip
})

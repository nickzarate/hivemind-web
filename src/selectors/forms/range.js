import { createStructuredSelector } from 'reselect'

export default createStructuredSelector({
  ranges: (state) => state.forms.ranges
})

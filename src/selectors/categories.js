import { createStructuredSelector } from 'reselect'

export default createStructuredSelector({
  categories: (state) => state.round.categories
})

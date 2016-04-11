import { createStructuredSelector } from 'reselect'
import getAnswers from 'selectors/answers'

export default createStructuredSelector({
  outcomes: (state) => state.category.outcomes,
  estimates: (state) => state.forms.estimates,
  tooltip: (state) => state.tooltip,
  answers: getAnswers
})

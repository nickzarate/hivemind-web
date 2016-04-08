import { createStructuredSelector } from 'reselect'

export default createStructuredSelector({
  survey: (state) => state.forms.survey,
  surveyForm: (state) => state.forms.surveyForm
})

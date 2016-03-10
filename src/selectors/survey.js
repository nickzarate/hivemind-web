import { createStructuredSelector } from 'reselect'

const surveySelector = (state) => state.forms.survey
const surveyFormSelector = (state) => state.forms.surveyForm

export default createStructuredSelector({
  survey: surveySelector,
  surveyForm: surveyFormSelector
})

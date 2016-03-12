import { createStructuredSelector } from 'reselect'

const surveySelector = (state) => state.survey
const surveyFormSelector = (state) => state.surveyForm

export default createStructuredSelector({
  survey: surveySelector,
  surveyForm: surveyFormSelector
})

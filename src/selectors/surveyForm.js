import { createSelector } from 'reselect'

const surveyFormSelector = (state) => state.forms.surveyForm

export default createSelector(
  surveyFormSelector,
  (surveyForm) => ({
    surveyForm
  })
)

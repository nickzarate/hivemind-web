import { createSelector } from 'reselect'

const surveyFormSelector = (state) => state.surveyForm

export default createSelector(
  surveyFormSelector,
  (surveyForm) => ({
    surveyForm
  })
)

import { createSelector } from 'reselect'

const surveySelector = (state) => state.forms.survey

export default createSelector(
  surveySelector,
  (survey) => ({
    survey
  })
)

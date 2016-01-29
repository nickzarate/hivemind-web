import { createSelector } from 'reselect'

const surveySelector = (state) => state.survey

export default createSelector(
  surveySelector,
  (survey) => ({
    survey
  })
)

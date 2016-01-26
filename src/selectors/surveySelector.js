import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as surveyActions from 'actions/survey'

export default function subscribe(component) {
  const surveySelector = (state) => state.survey

  const selector = createSelector(
    surveySelector,
    (survey) => ({
      survey: survey
    })
  )

  return reduxify({
    selector: selector,
    actions: surveyActions,
    component: component
  })
}

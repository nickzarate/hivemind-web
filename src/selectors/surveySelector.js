import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as surveyActions from 'actions/survey'

export default function subscribe(component) {
  const selector = (state) => state.survey

  const surveySelector = createSelector(
    selector,
    (survey) => ({
      survey: survey
    })
  )

  return reduxify({
    selector: surveySelector,
    actions: surveyActions,
    component: component
  })
}

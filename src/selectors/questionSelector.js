import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as questionActions from 'actions/question'

export default function subscribe(component) {
  const selector = (state) => state.question

  const questionSelector = createSelector(
    selector,
    (question) => ({
      question: question
    })
  )

  return reduxify({
    selector: questionSelector,
    actions: questionActions,
    component: component
  })
}

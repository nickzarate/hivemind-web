import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as questionActions from 'actions/question'

export default function subscribe(component) {
  const questionSelector = (state) => state.question

  const selector = createSelector(
    questionSelector,
    (question) => ({
      question: question
    })
  )

  return reduxify({
    selector: selector,
    actions: questionActions,
    component: component
  })
}

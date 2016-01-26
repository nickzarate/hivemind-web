import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as roundActions from 'actions/round'

export default function subscribe(component) {
  const selector = (state) => state.round

  const roundSelector = createSelector(
    selector,
    (round) => ({
      round: round
    })
  )

  return reduxify({
    selector: roundSelector,
    actions: roundActions,
    component: component
  })
}

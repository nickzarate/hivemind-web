import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as roundActions from 'actions/round'

export default function subscribe(component) {
  const roundSelector = (state) => state.round

  const selector = createSelector(
    roundSelector,
    (round) => ({
      round: round
    })
  )

  return reduxify({
    selector: selector,
    actions: roundActions,
    component: component
  })
}

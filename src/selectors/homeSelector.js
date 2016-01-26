import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as homeActions from 'actions/home'

export default function subscribe(component) {
  const selector = (state) => state.round

  const homeSelector = createSelector(
    selector,
    (round) => ({
      round: round
    })
  )

  return reduxify({
    selector: homeSelector,
    actions: homeActions,
    component: component
  })
}

import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as homeActions from 'actions/home'

export default function subscribe(component) {
  const homeSelector = (state) => state.round

  const selector = createSelector(
    homeSelector,
    (round) => ({
      round: round
    })
  )

  return reduxify({
    selector: selector,
    actions: homeActions,
    component: component
  })
}

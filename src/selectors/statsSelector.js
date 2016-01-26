import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as statsActions from 'actions/stats'

export default function subscribe(component) {
  const statsSelector = (state) => state.stats

  const selector = createSelector(
    statsSelector,
    (stats) => ({
      stats: stats
    })
  )

  return reduxify({
    selector: selector,
    actions: statsActions,
    component: component
  })
}

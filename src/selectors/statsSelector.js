import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as statsActions from 'actions/stats'

export default function subscribe(component) {
  const selector = (state) => state.stats

  const statsSelector = createSelector(
    selector,
    (stats) => ({
      stats: stats
    })
  )

  return reduxify({
    selector: statsSelector,
    actions: statsActions,
    component: component
  })
}

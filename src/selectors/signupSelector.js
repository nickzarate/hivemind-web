import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as userActions from 'actions/user'

export default function subscribe(component) {
  const selector = (state) => state.user

  const userSelector = createSelector(
    selector,
    (user) => ({
      user: user
    })
  )

  return reduxify({
    selector: userSelector,
    actions: userActions,
    component: component
  })
}

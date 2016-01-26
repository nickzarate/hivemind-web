import { createSelector } from 'reselect'
import reduxify from 'toolbox/reduxify'
import * as userActions from 'actions/user'

export default function subscribe(component) {
  const userSelector = (state) => state.user

  const selector = createSelector(
    userSelector,
    (user) => ({
      user: user
    })
  )

  return reduxify({
    selector: selector,
    actions: userActions,
    component: component
  })
}

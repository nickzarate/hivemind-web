import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import merge from './merge'
import * as clear from 'actions/clear'

/**
 * Reduxifies a container.
 *
 * @param state     - The name of the desired state. The container will
 *                    be given read-access to this state.
 * @param actions   - An array of actions, or a single actionset. The container will
 *                    be allowed to execute these actions.
 * @param container - The container to be connected.
 * @return the connected container
 */
export default function reduxify({ selector, actions, container }) {
  let mapDispatchToProps = null

  if (actions) {
    const push = routeActions.push
    actions = merge(actions, clear)

    // the container will be provided actions
    mapDispatchToProps = (dispatch) => {
      return {
        actions: bindActionCreators(actions, dispatch),
        push: bindActionCreators(push, dispatch)
      }
    }
  }

  return connect(
    selector,
    mapDispatchToProps
  )(container)
}

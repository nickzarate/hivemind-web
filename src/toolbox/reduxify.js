import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'

/**
 * Reduxifies a component.
 *
 * @param state     - The name of the desired state. The component will
 *                    be given read-access to this state.
 * @param actions   - An array of actions, or a single actionset. The component will
 *                    be allowed to execute these actions.
 * @param component - The component to be connected.
 * @return the connected component
 */
export default function reduxify({ selector, actions, component }) {
  const push = routeActions.push

  // the component will be provided actions
  let mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch),
      push: bindActionCreators(push, dispatch)
    }
  }

  return connect(
    selector,
    mapDispatchToProps
  )(component)
}

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'
import apply from './apply'
import merge from './merge'


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
export default function reduxify({ state, actions, component }) {
  const push = routeActions.push

  // the component will subscribe to Redux store updates
  var mapStateToProps = (totalState) => ({ [state]: totalState[state] })

  // the component will be provided actions
  if (actions)
    var mapDispatchToProps = (dispatch) => apply(
      merge(actions, { pushPath: push }),
      (action) => bindActionCreators(action, dispatch)
    )

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component)
}

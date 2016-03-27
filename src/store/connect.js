import { bindActionCreators } from 'redux'
import { connect as rrConnect } from 'react-redux'

/*
 * Connects a react component to the redux store.
 *
 * @param state      - The name of the desired substate.
 * @param selector   - a memoized selector function describing selection logic.
 *                     The selector efficiently computes derived data from the store.
 * @param actions    - The actions that will be provided to the connected component.
 *
 * @return           - Return the enhancer function.
 */
export default function connect({ state, selector, actions }) {
  /* the container will subscribe to Redux store updates */
  let mapStateToProps = (STATE) => state ? { [state]: STATE[state] } : {}

  /* the container will be provided actions */
  if (actions) {
    var mapDispatchToProps = (dispatch) => ({
      actions: bindActionCreators(actions, dispatch)
    })
  }

  return rrConnect(
    selector ? selector : mapStateToProps,
    mapDispatchToProps
  )
}

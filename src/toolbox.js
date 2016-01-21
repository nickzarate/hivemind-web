
export function hammer() {
  return 'hammer'
}

export function screwdriver() {
  return 'screwdriver'
}

export function scissors() {
  return 'scissors'
}

export function merge(...args) {
  let obj = {}
  for (let arg of args)
    Object.assign(obj, arg)
  return obj
}

export function rand(min, max) {
  return min + Math.floor(Math.random() * (max - min))
}

/**
 * Return a new object with a function applied on each element of the original object
 */
export const apply = (object, callback) => Object.keys(object).reduce(
  (result, key) => Object.assign(
    result,
    { [key]: callback(object[key]) }
  ), {}
)


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
export function reduxify({ state, actions, component }) {

  /*eslint-env node*/
  const { bindActionCreators } = require('redux')
  const { connect } = require('react-redux')
  const { routeActions } = require('redux-simple-router')
  const push = routeActions.push

  // the component will subscribe to Redux store updates
  var mapStateToProps = (STATE) => ({
    [state]: STATE[state]
  })

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

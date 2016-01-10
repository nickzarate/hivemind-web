
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

export function reduxify(payload) {
  /*eslint-env node*/
  const { bindActionCreators } = require('redux')
  const { connect } = require('react-redux')
  const { pushPath } = require('redux-simple-router')

  let mapStateToProps = (state) => ({
    [payload.reducer]: state[payload.reducer]
  })

  let mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(payload.actions, dispatch),
    pushPath: bindActionCreators(pushPath, dispatch) // we want every component to have pushpath
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(payload.component)

}

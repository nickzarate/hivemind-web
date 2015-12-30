import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'

import Counter from 'components/Counter'
import * as CounterActions from 'actions/counter'

import { merge } from 'toolbox'


class Index extends React.Component {

  pushPath(path) {
    return () => this.props.actions.pushPath(path)
  }

  render() {
    const { actions } = this.props
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <Counter
          decrement={ actions.decrement }
          increment={ actions.increment }
          pushPath={ this.pushPath('/login') }
          value={ this.props.value }
        />
        <button onClick={ this.pushPath('/login') }>{ 'GOD' }</button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    value: state.counter.value //sketchy af
  }
}

function mapDispatchToProps(dispatch) {
  let actions = merge(
    CounterActions,
    { pushPath: pushPath }
  )
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

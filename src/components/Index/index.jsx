import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'

import Counter from 'components/Counter'
import { counterActions } from 'actions'

class Index extends React.Component {

  pushPath(path) {
    return () => this.props.pushPath(path)
  }


  render() {
    const { actions, value } = this.props
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <Counter
          decrement={ actions.decrement }
          increment={ actions.increment }
          value={ value }
        />
        <button onClick={ this.pushPath('/login') }>{ 'Login Page' }</button>
      </div>
    )
  }

}

Index.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    value: state.counter.value //sketchy af
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch),
    pushPath: bindActionCreators(pushPath, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

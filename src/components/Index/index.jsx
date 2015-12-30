import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Counter from 'components/Counter'
import * as CounterActions from 'actions/counter'




class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <Counter
          value={ this.props.value }
          increment={ this.props.increment }
          decrement={ this.props.decrement }
        />
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
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

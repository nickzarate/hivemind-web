import { React, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Counter from 'components/Counter'
import * as CounterActions from 'actions/counter'


class Index extends React.Component {
  displayName: 'Index'

  render() {
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <Counter
          decrement={ this.props.decrement }
          increment={ this.props.increment }
          value={ this.props.value }
        />
      </div>
    )
  }
}

Index.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
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

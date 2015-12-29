import React, { PropTypes } from 'react'

// React component
class Counter extends React.Component {
  displayName: 'Counter'

  render () {
    console.log(this)
    return (
      <div>
        <span>{ this.props.value }</span>
        <button onClick={ this.props.increase }>{ 'Increase' }</button>
      </div>
    )
  }
}

Counter.propTypes = {
  increase: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default Counter
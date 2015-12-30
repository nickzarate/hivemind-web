import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  displayName: 'Counter'

  render() {
    const { increment, decrement, value } = this.props
    return (
      <p>
        { 'Clicked: ' + value + ' times' }
        { ' ' }
        <button onClick={ increment }>{ '+' }</button>
        { ' ' }
        <button onClick={ decrement }>{ '-' }</button>
      </p>
    )
  }
}

Counter.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default Counter

import React, { Component, PropTypes } from 'react'

class Counter extends Component {
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
  value: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
}

export default Counter

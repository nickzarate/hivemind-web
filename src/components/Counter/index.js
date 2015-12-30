import React, { PropTypes } from 'react'

// React component
class Counter extends React.Component {
  displayName: 'Counter'

  click() {
    this.props.increase
    console.log(this.props.increase)
  }

  render () {
    console.log(this)
    return (
      <div>
        <span>{ this.props.value }</span>
        <button onClick={ this.click.bind(this) }>{ 'Increase' }</button>
      </div>
    )
  }
}

Counter.propTypes = {
  increase: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default Counter
import React from 'react'

export default class Round extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
        <button onClick={ this.props.onSubmit }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

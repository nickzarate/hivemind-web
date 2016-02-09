import React from 'react'

export default class UnwrappedForm extends React.Component {
  render() {
    return (
      <form onSubmit={ this.props.onSubmit }>
        { this.props.children }
      </form>
    )
  }
}

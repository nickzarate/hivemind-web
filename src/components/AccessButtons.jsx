import React from 'react'

export default class Bins extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ this.props.onLogin }>{ 'Log In' }</button>
        <button onClick={ this.props.onSignup }>{ 'Sign Up' }</button>
      </div>
    )
  }
}

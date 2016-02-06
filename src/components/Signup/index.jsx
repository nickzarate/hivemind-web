import Parse from 'parse'
import React from 'react'
import LoginForm from 'components/Lib/LoginForm'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import Tooltip from 'components/Lib/Tooltip'

export default class Signup extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentDidMount() {
    if (Parse.User.current()) { this.props.push('/home') }
  }

  componentWillUnmount() {
    this.props.actions.clearError()
  }

  push(path) {
    return () => this.props.push(path)
  }

  handleSignup = (data) => this.props.actions.asyncSignup(Parse, this.push('/survey'), data);

  render() {
    return (
      <div>
        <h1>{ 'Sign Up' }</h1>
        <Tooltip target={ this.loginForm } message={ this.props.user.errorMessage } />
        <LoginForm onSubmit={ this.handleSignup } text="Sign Up" ref={ (ref) => this.loginForm = ref } />
        <button onClick={ this.push('/') }>{ 'Log In' }</button>
      </div>
    )
  }
}

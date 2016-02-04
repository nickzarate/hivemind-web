import Parse from 'parse'
import React from 'react'
import LoginForm from 'components/Lib/LoginForm'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Signup extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    if (Parse.User.current()) { this.props.push('/home') }
    this.props.actions.clearError()
  }

  push(path) {
    return () => this.props.push(path)
  }

  handleEmail = (event) => this.props.actions.setUserEmail(event.target.value);
  handlePassword = (event) => this.props.actions.setUserPassword(event.target.value);
  handleSignup = (data) => this.props.actions.asyncSignup(Parse, this.push('/survey'), data);

  render() {
    return (
      <div>
        <h1>{ 'Sign Up' }</h1>
        <LoginForm onSubmit={ this.handleSignup } text="Sign Up" />
        <button onClick={ this.push('/home') }>{ 'Home' }</button>
        <button onClick={ this.push('/') }>{ 'Log In' }</button>
      </div>
    )
  }
}

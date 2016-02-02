import Parse from 'parse'
import React from 'react'
import LoginForm from 'components/Lib/LoginForm'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Login extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    if (Parse.User.current()) { this.props.push('/home') }
  }

  push(path) {
    return () => this.props.push(path)
  }

  handleEmail = (event) => this.props.actions.setUserEmail(event.target.value);
  handlePassword = (event) => this.props.actions.setUserPassword(event.target.value);
  handleLogin = (data) => this.props.actions.asyncLogin(Parse, this.push('/home'), data);

  render() {
    return (
      <div>
        <h1>{ 'Login' }</h1>
        <LoginForm onSubmit={ this.handleLogin } />
        <button onClick={ this.push('/home') }>{ 'Home' }</button>
        <button onClick={ this.push('/signup') }>{ 'Sign Up' }</button>
      </div>
    )
  }
}

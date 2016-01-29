import Parse from 'parse'
import React from 'react'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Login extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  push(path) {
    return () => this.props.push(path)
  }

  handleEmail = (event) => this.props.actions.setUserEmail(event.target.value);
  handlePassword = (event) => this.props.actions.setUserPassword(event.target.value);
  handleLogin = () => this.props.actions.asyncLogin(Parse, this.push('/home'));

  render() {
    return (
      <div>
        <h1>{ 'Login' }</h1>
        <form onSubmit={ this.handleLogin }>
          <input
            onChange={ this.handleEmail }
            placeholder="Email"
            type="email"
          />
          <input
            onChange={ this.handlePassword }
            placeholder="Password"
            type="password" />
          <button onClick={ this.handleLogin }>{ 'Log In' }</button>
        </form>
        <button onClick={ this.push('/home') }>{ 'Home' }</button>
        <button onClick={ this.push('/signup') }>{ 'Sign Up' }</button>
      </div>
    )
  }
}

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
        <input
          onChange={ this.handleEmail }
          placeholder="EMAIL"
          type="email"
        />
        <input
          onChange={ this.handlePassword }
          placeholder="PASSWORD"
          type="password"
        />
        <button onClick={ this.handleLogin }>{ 'Log In' }</button>
        <button onClick={ this.push('/home') }>{ 'home' }</button>
        <button onClick={ this.push('/signup') }>{ 'Dont have an account?' }</button>
      </div>
    )
  }
}

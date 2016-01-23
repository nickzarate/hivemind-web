import Parse from 'parse'
import React from 'react'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Login extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleEmail = (event) => this.props.actions.setUserEmail(event.target.value);
  handlePassword = (event) => this.props.actions.setUserPassword(event.target.value);
  handleLogin = () => this.props.actions.asyncLogin(Parse, this.pushPath('/home'));

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
        <button onClick={ this.pushPath('/home') }>{ 'Home' }</button>
        <button onClick={ this.pushPath('/signup') }>{ 'Sign Up' }</button>
      </div>
    )
  }
}

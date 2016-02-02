import Parse from 'parse'
import React from 'react'
import LoginForm from 'components/Lib/LoginForm'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Signup extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  push(path) {
    return () => this.props.push(path)
  }

  handleEmail = (event) => this.props.actions.setUserEmail(event.target.value);
  handlePassword = (event) => this.props.actions.setUserPassword(event.target.value);
  handleSignup = () => this.props.actions.asyncSignup(Parse, this.push('/survey'));

  render() {
    return (
      <div>
        <h1>{ 'Sign Up' }</h1>
        <form onSubmit={ this.handleSignup }>
          <input
            onChange={ this.handleEmail }
            placeholder="Email"
            type="email"
          />
          <input
            onChange={ this.handlePassword }
            placeholder="Password"
            type="password"
          />
          <button onClick={ this.handleSignup }>{ 'Sign Up' }</button>
        </form>
        <button onClick={ this.push('/home') }>{ 'Home' }</button>
        <button onClick={ this.push('/') }>{ 'Log In' }</button>
      </div>
    )
  }
}

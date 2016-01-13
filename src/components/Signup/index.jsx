import Parse from 'parse'
import React from 'react'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class SignupComp extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleEmail = (event) => this.props.actions.setUserEmail(event.target.value);
  handlePassword = (event) => this.props.actions.setUserPassword(event.target.value);
  handleSignup = () => this.props.actions.asyncSignup(Parse, this.pushPath('/survey'));

  render() {
    return (
      <div>
        <h1>{ 'Sign Up' }</h1>
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
        <button onClick={ this.handleSignup }>{ 'Sign Up' }</button>
        <button onClick={ this.pushPath('/home') }>{ 'home' }</button>
        <button onClick={ this.pushPath('/') }>{ 'Already have an account?' }</button>
      </div>
    )
  }
}

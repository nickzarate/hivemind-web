import Parse from 'parse'
import React from 'react'
import LoginForm from 'components/Lib/LoginForm'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import Tooltip from 'components/Lib/Tooltip'

export default class Login extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentDidMount() {
    if (Parse.User.current()) { this.props.push('/home') }
  }

  componentWillUnmount() {
    this.props.actions.setErrorMessage(null)
  }

  push(path) {
    return () => this.props.push(path)
  }

  handleLogin = (data) => this.props.actions.asyncLogin(Parse, this.push('/home'), data);

  render() {
    return (
      <div>
        <h1>{ 'Login' }</h1>
        <Tooltip target={ this.loginForm } message={ this.props.user.errorMessage } />
        <LoginForm onSubmit={ this.handleLogin } text="Log In" ref={ (ref) => this.loginForm = ref } />
        <button onClick={ this.push('/signup') }>{ 'Sign Up' }</button>
      </div>
    )
  }
}

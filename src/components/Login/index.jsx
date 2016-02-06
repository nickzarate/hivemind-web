import Parse from 'parse'
import React from 'react'
import LoginForm from 'components/Lib/LoginForm'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import renderTooltip from 'toolbox/renderTooltip'

export default class Login extends React.Component {
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

  handleLogin = (data) => this.props.actions.asyncLogin(Parse, this.push('/home'), data);

  renderError() {
    let domNode = null
    renderTooltip({
      message: this.props.user.errorMessage,
      targetDomNode: domNode
    })
  }

  render() {
    console.log(this)
    return (
      <div>
        <h1>{ 'Login' }</h1>
        { this.renderError() }
        <LoginForm onSubmit={ this.handleLogin } text="Log In" />
        <button onClick={ this.push('/signup') }>{ 'Sign Up' }</button>
      </div>
    )
  }
}

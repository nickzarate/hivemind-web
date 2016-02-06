import Parse from 'parse'
import React from 'react'
import ReactDOM from 'react-dom'
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
    if (this.loginForm) { domNode = this.loginForm }
    renderTooltip({
      message: this.props.user.errorMessage,
      target: ReactDOM.findDOMNode(domNode)
    })
  }

  render() {
    return (
      <div>
        <h1>{ 'Login' }</h1>
        { this.renderError() }
        <LoginForm onSubmit={ this.handleLogin } text="Log In" ref={ (ref) => this.loginForm = ref } />
        <button onClick={ this.push('/signup') }>{ 'Sign Up' }</button>
      </div>
    )
  }
}

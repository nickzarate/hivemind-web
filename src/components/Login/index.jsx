import Parse from 'parse'
import React, { PropTypes } from 'react'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class LoginComp extends React.Component {
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
    console.log(this)
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
        <button onClick={ this.handleLogin }>{ 'GO' }</button>
        <button onClick={ this.pushPath('/') }>{ 'index' }</button>
        <button onClick={ this.pushPath('/Home') }>{ 'home' }</button>
      </div>
    )
  }
}

LoginComp.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

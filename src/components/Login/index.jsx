// import Parse from 'parse'
// import ParseReact from 'parse-react'
import React, { PropTypes } from 'react'
import { loginActions } from 'actions'
import { reduxify } from 'toolbox'


export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleEmail = (event) => this.props.actions.setUserEmail(event.target.value);

  handlePassword = (event) => this.props.actions.setUserPassword(event.target.value);

  handleLogin() {
  }

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
        <button onClick={ this.handleLogin }>{ 'GO' }</button>
        <button onClick={ this.pushPath('/') }>{ 'home' }</button>
      </div>
    )
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
}

export default reduxify({
  component: Login,
  reducer: 'login',
  actions: loginActions
})

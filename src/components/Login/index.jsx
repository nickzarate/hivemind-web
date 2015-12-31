// import Parse from 'parse'
// import ParseReact from 'parse-react'
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'
import { loginActions } from 'actions'


export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  setEmail = (event) => {
    return this.props.actions.setUserEmail(event.target.value)
  };

  setPassword = (event) => this.props.actions.setUserPassword(event.target.value);

  handleLogin() {
  }

  render() {
    return (
      <div>
        <h1>{ 'Login' }</h1>
        <input
          onChange={ this.setEmail }
          placeholder="EMAIL"
          type="email"
        />
        <input
          onChange={ this.setPassword }
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

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
    pushPath: bindActionCreators(pushPath, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
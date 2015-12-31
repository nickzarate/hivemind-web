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
    this.state = {
      email: '',
      password: ''
    }
  }

  setEmail(email) {
    return () => this.props.actions.setUserEmail(email)
  }

  setPassword(password) {
    return () => this.props.actions.setUserPassword(password)
  }

  render() {
    console.log(this)
    const { user, pushPath, actions } = this.props
    return (
      <div>
        <h1>{ 'Login' }</h1>
        <input
          onChange={ this.setEmail('k') }
          placeholder="EMAIL"
          type="email"
          value={ user.email }
        />
        <input
          onChange={ this.setPassword('k') }
          placeholder="PASSWORD"
          type="password"
          value={ user.password }
        />
        <button onClick={ this.props.login }>{ 'GO' }</button>
        <h1> { this.state.email } </h1>
        <h1> { this.state.password } </h1>
      </div>
    )
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
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
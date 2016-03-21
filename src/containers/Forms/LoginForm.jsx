import React from 'react'
import connect from 'store/connect'
import LoginForm from 'components/Forms/LoginForm'
import { asyncLogin } from 'actions/user'
import { setMessage, setTarget } from 'actions/tooltip'
import { actions } from 'react-redux-form'
import loginFormSelector from 'selectors/forms/login'

class LoginFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.setMessage('')
    this.props.actions.setTarget('')
    this.props.actions.reset('login')
  }

  handleSubmit = () => this.props.actions.asyncLogin();

  render() {
    return (
      <LoginForm
        tooltipTarget={ this.props.tooltipTarget }
        tooltipMessage={ this.props.tooltipMessage }
        onSubmit={ this.handleSubmit }
      />
    )
  }
}

export default connect({
  selector: loginFormSelector,
  actions: { asyncLogin, setMessage, setTarget, reset: actions.reset }
})(LoginFormContainer)

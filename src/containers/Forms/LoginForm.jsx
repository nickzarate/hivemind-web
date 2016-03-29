import React from 'react'
import connect from 'store/connect'
import LoginForm from 'components/Forms/LoginForm'
import { asyncLogin } from 'actions/user'
import { setTooltipMessage, setTooltipTarget } from 'actions/tooltip'
import { actions } from 'react-redux-form'
import loginFormSelector from 'selectors/forms/login'

class LoginFormContainer extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.actions.setTooltipMessage('')
    this.props.actions.setTooltipTarget('')
    this.props.actions.reset('login')
  }

  handleSubmit() {
    this.props.actions.asyncLogin()
  }

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
  actions: { asyncLogin, setTooltipMessage, setTooltipTarget, reset: actions.reset }
})(LoginFormContainer)

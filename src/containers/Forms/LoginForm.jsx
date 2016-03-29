import React from 'react'
import connect from 'store/connect'
import LoginForm from 'components/Forms/LoginForm'
import { login } from 'reducers/user'
import { setTooltipMessage, setTooltipTarget } from 'reducers/tooltip'
import { actions } from 'react-redux-form'
import tooltipSelector from 'selectors/tooltip'

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

  handleSubmit() { this.props.actions.login() }

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
  selector: tooltipSelector,
  actions: { login, setTooltipMessage, setTooltipTarget, reset: actions.reset }
})(LoginFormContainer)

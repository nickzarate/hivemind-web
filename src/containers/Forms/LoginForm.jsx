import React from 'react'
import reduxify from 'store/reduxify'
import LoginForm from 'components/Forms/LoginForm'
import { login } from 'reducers/user'
import { setTooltipMessage, setTooltipTarget } from 'actions/tooltip'
import { actions } from 'react-redux-form'
import loginFormSelector from 'selectors/forms/login'

class LoginFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.setTooltipMessage('')
    this.props.actions.setTooltipTarget('')
    this.props.actions.reset('login')
  }

  handleSubmit = () => this.props.actions.login(this.props.email, this.props.password);

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

export default reduxify({
  selector: loginFormSelector,
  actions: { login, setTooltipMessage, setTooltipTarget, reset: actions.reset },
  container: LoginFormContainer
})

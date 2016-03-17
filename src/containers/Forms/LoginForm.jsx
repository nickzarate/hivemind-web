import React from 'react'
import reduxify from 'store/reduxify'
import LoginForm from 'components/Forms/LoginForm'
import { login } from 'reducers/user'
import { setMessage, setTarget } from 'actions/tooltip'
import { actions } from 'react-redux-form'
import loginFormSelector from 'selectors/forms/login'

class LoginFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.setMessage('')
    this.props.actions.setTarget('')
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
  actions: { login, setMessage, setTarget, reset: actions.reset },
  container: LoginFormContainer
})

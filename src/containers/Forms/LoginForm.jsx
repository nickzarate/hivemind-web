import React from 'react'
import reduxify from 'store/reduxify'
import LoginForm from 'components/Forms/LoginForm'
import { asyncLogin } from 'actions/user'
import { setMessage } from 'actions/tooltip'
import { actions } from 'react-redux-form'
import loginFormSelector from 'selectors/forms/login'

class LoginFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.setMessage('')
    this.props.actions.reset('login')
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.actions.asyncLogin()
  };

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
  actions: { asyncLogin, setMessage, reset: actions.reset },
  container: LoginFormContainer
})

import React from 'react'
import connect from 'store/connect'
import LoginForm from 'components/Forms/LoginForm'
import { login } from 'reducers/user'
import { actions } from 'react-redux-form'
import tooltipSelector from 'selectors/tooltip'

class LoginFormContainer extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.actions.reset('login')
  }

  handleSubmit() {
    this.props.actions.login()
  }

  render() {
    return (
      <LoginForm
        tooltip={ this.props.tooltip }
        onSubmit={ this.handleSubmit }
      />
    )
  }
}

export default connect({
  selector: tooltipSelector,
  actions: { login, reset: actions.reset }
})(LoginFormContainer)

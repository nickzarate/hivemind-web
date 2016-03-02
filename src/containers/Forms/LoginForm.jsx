import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import reduxify from 'store/reduxify'
import LoginForm from 'components/Forms/LoginForm'
import { asyncLogin } from 'actions/user'
import { setMessage } from 'actions/tooltip'
import { actions } from 'react-redux-form'
import loginFormSelector from 'selectors/forms/login'

class LoginFormContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentWillUnmount() {
    this.props.actions.setMessage('')
    this.props.actions.reset('login')
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.actions.asyncLogin(Parse, this.props.push)
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

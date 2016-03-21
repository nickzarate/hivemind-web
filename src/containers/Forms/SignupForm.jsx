import React from 'react'
import connect from 'store/connect'
import SignupForm from 'components/Forms/SignupForm'
import { actions } from 'react-redux-form'
import { asyncHandleSignup } from 'actions/user'
import { setMessage, setTarget } from 'actions/tooltip'
import signupFormSelector from 'selectors/forms/signup'

class SignupFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.setMessage('')
    this.props.actions.setTarget('')
    this.props.actions.reset('signup')
  }

  handleSubmit = () => this.props.actions.asyncHandleSignup();

  render() {
    return (
      <SignupForm
        tooltipTarget={ this.props.tooltipTarget }
        tooltipMessage={ this.props.tooltipMessage }
        onSubmit={ this.handleSubmit }
      />
    )
  }
}

export default connect({
  selector: signupFormSelector,
  actions: { asyncHandleSignup, setMessage, setTarget, reset: actions.reset }
})(SignupFormContainer)

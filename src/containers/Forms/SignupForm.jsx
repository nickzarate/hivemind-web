import React from 'react'
import connect from 'store/connect'
import SignupForm from 'components/Forms/SignupForm'
import { actions } from 'react-redux-form'
import { asyncHandleSignup } from 'actions/user'
import tooltipSelector from 'selectors/tooltip'

class SignupFormContainer extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.actions.reset('signup')
  }

  handleSubmit() {
    this.props.actions.asyncHandleSignup()
  }

  render() {
    return (
      <SignupForm
        tooltip={ this.props.tooltip }
        onSubmit={ this.handleSubmit }
      />
    )
  }
}

export default connect({
  selector: tooltipSelector,
  actions: { asyncHandleSignup, reset: actions.reset }
})(SignupFormContainer)

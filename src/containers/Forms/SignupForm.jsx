import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import reduxify from 'store/reduxify'
import SignupForm from 'components/Forms/SignupForm'
import { actions } from 'react-redux-form'
import { asyncSignup } from 'actions/user'
import { setMessage } from 'actions/tooltip'
import signupFormSelector from 'selectors/forms/signup'

class SignupFormContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentWillUnmount() {
    this.props.actions.setMessage('')
    this.props.actions.reset('signup')
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.actions.asyncSignup(Parse, this.props.push)
  };

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

export default reduxify({
  selector: signupFormSelector,
  actions: { asyncSignup, setMessage, reset: actions.reset },
  container: SignupFormContainer
})

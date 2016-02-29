import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { showModal } from 'actions/modal'
import { asyncSignup } from 'actions/user'
import { actions } from 'react-redux-form'
import signupModalSelector from 'selectors/signupModal'
import SignupModal from 'components/SignupModal'
import reduxify from 'store/reduxify'

class SignupModalContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.props.actions.showModal(true)
  }

  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleSubmit = () => this.props.actions.asyncSignup(Parse, this.props.push);

  handleHide = () => {
    this.props.actions.showModal(false)
    this.props.actions.reset('signup')
    this.props.push('/')
  };

  render() {
    return (
      <SignupModal
        show={ this.props.showModal }
        onSubmit={ this.handleSubmit }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: signupModalSelector,
  actions: { showModal, asyncSignup, reset: actions.reset },
  container: SignupModalContainer
})

import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { showModal } from 'actions/modal'
import { asyncSignup } from 'actions/user'
import signupModalSelector from 'selectors/signupModal'
import SignupModal from 'components/SignupModal'
import reduxify from 'toolbox/reduxify'

class SignupModalContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    if (Parse.User.current()) {
      this.props.push('/home')
    }
    this.props.actions.showModal(true)
  }

  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleSubmit = () => this.props.actions.asyncSignup(Parse, this.props.push, this.props.values);
  handleHide = () => {
    this.props.actions.showModal(false)
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
  actions: { showModal, asyncSignup },
  container: SignupModalContainer
})

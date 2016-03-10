import React from 'react'
import { showModal } from 'actions/modal'
import signupModalSelector from 'selectors/signupModal'
import SignupModal from 'components/SignupModal'
import reduxify from 'store/reduxify'

class SignupModalContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleHide = () => this.props.actions.showModal(false);

  render() {
    return (
      <SignupModal
        show={ this.props.showModal }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: signupModalSelector,
  actions: { showModal },
  container: SignupModalContainer
})

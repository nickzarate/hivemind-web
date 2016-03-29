import React from 'react'
import { showModal } from 'actions/modal'
import signupModalSelector from 'selectors/signupModal'
import SignupModal from 'components/SignupModal'
import connect from 'store/connect'

class SignupModalContainer extends React.Component {
  constructor() {
    super()
    this.handleHide = this.handleHide.bind(this)
  }

  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleHide() { this.props.actions.showModal(false) }

  render() {
    return (
      <SignupModal
        show={ this.props.showModal }
        onHide={ this.handleHide }
      />
    )
  }
}

export default connect({
  selector: signupModalSelector,
  actions: { showModal }
})(SignupModalContainer)

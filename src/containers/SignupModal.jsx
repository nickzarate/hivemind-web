import React from 'react'
import { showModal } from 'reducers/modal'
import modalSelector from 'selectors/modal'
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

  handleHide() {
    this.props.actions.showModal(false)
  }

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
  selector: modalSelector,
  actions: { showModal }
})(SignupModalContainer)

import React from 'react'
import connect from 'store/connect'
import LoginModal from 'components/LoginModal'
import { showModal } from 'reducers/modal'
import modalSelector from 'selectors/modal'

class LoginModalContainer extends React.Component {
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
      <LoginModal
        show={ this.props.showModal }
        onHide={ this.handleHide }
      />
    )
  }
}

export default connect({
  selector: modalSelector,
  actions: { showModal }
})(LoginModalContainer)

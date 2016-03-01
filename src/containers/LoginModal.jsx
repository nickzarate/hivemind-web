import React from 'react'
import reduxify from 'store/reduxify'
import LoginModal from 'components/LoginModal'
import { showModal } from 'actions/modal'
import loginModalSelector from 'selectors/loginModal'

class LoginModalContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleHide = () => {
    this.props.actions.showModal(false)
  };

  render() {
    return (
      <LoginModal
        show={ this.props.showModal }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: loginModalSelector,
  actions: { showModal },
  container: LoginModalContainer
})

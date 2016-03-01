import React from 'react'
import { actions } from 'react-redux-form'
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
    this.props.actions.reset('login')
  };

  render() {
    return (
      <LoginModal
        show={ this.props.showModal }
        onSubmit={ this.handleSubmit }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: loginModalSelector,
  actions: { showModal, reset: actions.reset },
  container: LoginModalContainer
})

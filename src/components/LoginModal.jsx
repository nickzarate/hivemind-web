import React from 'react'
import { Modal } from 'react-bootstrap'
import LoginForm from 'containers/Forms/LoginForm'

export default class LoginModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          { 'Log In' }
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    )
  }
}

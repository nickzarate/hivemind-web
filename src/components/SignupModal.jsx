import React from 'react'
import { Modal } from 'react-bootstrap'
import SignupForm from 'containers/Forms/SignupForm'

export default class LoginModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          { 'Sign Up' }
        </Modal.Header>
        <Modal.Body>
          <SignupForm />
          <button>Test</button>
        </Modal.Body>
      </Modal>
    )
  }
}

import React from 'react'
import { Modal } from 'react-bootstrap'
import LoginForm from 'components/LoginForm'

export default class LoginModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          { 'Log In' }
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
          <button onClick={ this.props.onSubmit }>{ 'Log In' }</button>
        </Modal.Body>
      </Modal>
    )
  }
}

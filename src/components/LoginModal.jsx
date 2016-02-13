import React from 'react'
import { Modal } from 'react-bootstrap'
import InputForm from 'containers/InputForm'

export default class LoginModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          { 'Log In' }
        </Modal.Header>
        <Modal.Body>
          <InputForm
            placeholders={ ['Email','Password'] }
            types={ ['email','password'] }
          />
          <button onClick={ this.props.onSubmit }>{ 'Log In' }</button>
        </Modal.Body>
      </Modal>
    )
  }
}

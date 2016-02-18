import React from 'react'
import { Modal } from 'react-bootstrap'
import InputForm from 'containers/InputForm'

export default class LoginModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          { 'Sign Up' }
        </Modal.Header>
        <Modal.Body>
          <InputForm
            placeholders={ ['Email','Password','Confirm Password'] }
            types={ ['email','password','password'] }
          />
          <button onClick={ this.props.onSubmit }>{ 'Sign Up' }</button>
        </Modal.Body>
      </Modal>
    )
  }
}

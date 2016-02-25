import React from 'react'
import { Modal } from 'react-bootstrap'
import { Field } from 'react-redux-form'

export default class LoginModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          { 'Log In' }
        </Modal.Header>
        <Modal.Body>
          <form>
            <Field model="login.email">
              <input type="email" placeholder="Email" />
            </Field>
            <Field model="login.password">
              <input type="password" placeholder="Password" />
            </Field>
          </form>
          <button onClick={ this.props.onSubmit }>{ 'Log In' }</button>
        </Modal.Body>
      </Modal>
    )
  }
}

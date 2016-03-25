import React from 'react'
import { Modal } from 'react-bootstrap'
import SignupForm from 'containers/Forms/SignupForm'
import styles from 'assets/sass/test.scss'

export default class LoginModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton className={ styles.test }>
          { 'Sign Up' }
        </Modal.Header>
        <Modal.Body>
          <SignupForm />
          <button className={ styles.button }>Test</button>
        </Modal.Body>
      </Modal>
    )
  }
}

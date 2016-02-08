import React from 'react'
import { Modal } from 'react-bootstrap'
import RangeForm from './RangeForm'

export default class Home extends React.Component {
  render() {
    if (this.props.currentCategory) {
      return (
        <Modal show={ this.props.show } onHide={ this.props.handleHide }>
          <Modal.Header closeButton>
            { this.props.currentCategory.get('name') }{ ' Instructions' }
          </Modal.Header>
          <Modal.Body>
            { this.props.currentCategory.get('instructions') }
            <RangeForm onSubmit={ this.props.onProceed } />
          </Modal.Body>
        </Modal>
      )
    } else { return null }
  }
}

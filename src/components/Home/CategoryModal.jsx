import React from 'react'
import { Modal } from 'react-bootstrap'
import RangeForm from './RangeForm'

export default class CategoryModal extends React.Component {
  render() {
    if (this.props.home.currentCategory) {
      return (
        <Modal show={ this.props.home.showModal } onHide={ this.props.handleHide }>
          <Modal.Header closeButton>
            { this.props.home.currentCategory.get('name') }{ ' Instructions' }
          </Modal.Header>
          <Modal.Body>
            { this.props.home.currentCategory.get('instructions') }
            <RangeForm onSubmit={ this.props.onProceed } errorMessage={ this.props.home.errorMessage } />
          </Modal.Body>
        </Modal>
      )
    } else { return null }
  }
}

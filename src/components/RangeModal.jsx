import React from 'react'
import { Modal } from 'react-bootstrap'
import RangePreview from 'containers/RangePreview'

export default class RangeModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          { 'Instructions' }
        </Modal.Header>
        <Modal.Body>
          <RangePreview />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={ this.props.onSubmit }>{ 'Start Round' }</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

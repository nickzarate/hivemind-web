import React from 'react'
import { Modal } from 'react-bootstrap'
import InputForm from 'containers/InputForm'

export default class RangeModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          { 'Instructions' }
        </Modal.Header>
        <Modal.Body>
          { this.props.instructions }
          <InputForm
            placeholders={ ['Lower bound','Upper bound'] }
            types={ ['number','number'] }
          />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={ this.props.onSubmit }>{ 'Start Round' }</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

import React from 'react'
import { Modal } from 'react-bootstrap'
import RangePreview from 'containers/RangePreview'
import { Button } from 'components/Lib/Buttons'

export default class RangeModal extends React.Component {
  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          <RangePreview />
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={ this.props.onHide }>{ 'Set Ranges' }</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

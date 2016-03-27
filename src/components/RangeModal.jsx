import React from 'react'
import { Modal } from 'react-bootstrap'
import RangePreview from 'containers/RangePreview'
import CategorySurveyForm from 'containers/Forms/CategorySurveyForm'

export default class RangeModal extends React.Component {

  handleClick = () => this.props.unlocked ? this.props.onStart() : this.props.onSubmit();

  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          { this.props.unlocked ? this.props.roundInstructions : 'Unlock Category' }
        </Modal.Header>
        <Modal.Body>
          { this.props.unlocked ? <RangePreview /> : <CategorySurveyForm /> }
        </Modal.Body>
        <Modal.Footer>
          <button onClick={ this.handleClick }>{ this.props.unlocked ? 'Start Round' : 'Submit' }</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

import React from 'react'
import { Modal } from 'react-bootstrap'
import RangePreview from 'containers/RangePreview'
import CategorySurveyForm from 'containers/Forms/CategorySurveyForm'
import { Button } from 'components/Lib/Buttons'

export default class RangeModal extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.unlocked ? this.props.onStart() : this.props.onSubmit()
  }

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
          <Button onClick={ this.handleClick }>{ this.props.unlocked ? 'Start Round' : 'Submit' }</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

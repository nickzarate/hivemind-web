import React from 'react'
import connect from 'store/connect'
import RangeModal from 'components/RangeModal'
import { handleSurveySubmission, handleStart } from 'actions/home'
import { showModal } from 'actions/modal'
import rangeModalSelector from 'selectors/rangeModal'

class RangeModalContainer extends React.Component {
  constructor() {
    super()
    this.handleHide = this.handleHide.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleHide() { this.props.actions.showModal(false) }
  handleStart() { this.props.actions.handleStart() }
  handleSubmit() { this.props.actions.handleSurveySubmission() }

  render() {
    return (
      <RangeModal
        show={ this.props.showModal }
        onStart={ this.handleStart }
        onSubmit={ this.handleSubmit }
        onHide={ this.handleHide }
        unlocked={ this.props.unlocked }
        roundInstructions={ this.props.roundInstructions }
      />
    )
  }
}

export default connect({
  selector: rangeModalSelector,
  actions: { showModal, handleSurveySubmission, handleStart }
})(RangeModalContainer)

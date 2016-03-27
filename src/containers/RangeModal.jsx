import React from 'react'
import connect from 'store/connect'
import RangeModal from 'components/RangeModal'
import { handleSurveySubmission, handleStart } from 'reducers/round'
import { showModal } from 'reducers/modal'
import rangeModalSelector from 'selectors/rangeModal'

class RangeModalContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleHide = () => this.props.actions.showModal(false);
  handleStart = () => this.props.actions.handleStart();
  handleSubmit = () => this.props.actions.handleSurveySubmission();

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

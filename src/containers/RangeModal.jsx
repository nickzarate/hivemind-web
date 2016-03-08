import React from 'react'
import reduxify from 'store/reduxify'
import RangeModal from 'components/RangeModal'
import { handleSurveySubmission, handleStart } from 'actions/home'
import { showModal } from 'actions/modal'
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
      />
    )
  }
}

export default reduxify({
  selector: rangeModalSelector,
  actions: { showModal, handleSurveySubmission, handleStart },
  container: RangeModalContainer
})

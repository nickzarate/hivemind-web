import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { handleRangeSubmission, handleSurveySubmission } from 'actions/home'
import { showModal } from 'actions/modal'
import { actions } from 'react-redux-form'
import rangeModalSelector from 'selectors/rangeModal'
import RangeModal from 'components/RangeModal'
import reduxify from 'store/reduxify'

class RangeModalContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleStart = () => this.props.actions.handleRangeSubmission(this.props.push, '/round');
  handleSubmit = () => this.props.actions.handleSurveySubmission(Parse);
  handleHide = () => {
    this.props.actions.showModal(false)
    this.props.actions.reset('ranges')
  };

  render() {
    return (
      <RangeModal
        show={ this.props.showModal }
        instructions={ this.props.instructions }
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
  actions: { handleRangeSubmission, showModal, handleSurveySubmission, reset: actions.reset },
  container: RangeModalContainer
})

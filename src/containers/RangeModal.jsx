import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { handleSurveySubmission } from 'actions/home'
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

  handleHide = () => {
    this.props.actions.showModal(false)
    this.props.actions.reset('ranges')
  };

  handleStart = () => {
    if (this.props.rangesForm.valid) {
      this.props.push('/round')
    }
  };

  handleSubmit = () => this.props.actions.handleSurveySubmission(Parse.User.current());

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
  actions: { showModal, handleSurveySubmission, reset: actions.reset },
  container: RangeModalContainer
})

import React, { PropTypes } from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Question extends React.Component {

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.props.actions.pullQuestion(Parse, this.props.questionType + 'Question')
  }

  handleDeposit(index) { return () => this.props.actions.handleDeposit(index) }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleSubmit(answers, estimate) {
    return () => {
      const { actions } = this.props
      this.props.onSubmit(answers, estimate, Parse)
      if (!this.props.isSubmitting) {
        this.refs.estimateInput.value = ''
        actions.resetBank()
        actions.pullQuestion(Parse, this.props.questionType + 'Question')
      }
    }
  }

  render() {
    return (
      <div>
        <p>{ 'Hello!' }</p>
      </div>
    )
  }
}

Question.propTypes = {
  actions: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  onEstimate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pushPath: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  questionType: PropTypes.string.isRequired
}

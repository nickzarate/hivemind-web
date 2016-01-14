import React from 'react'
import { reduxify } from 'toolbox'
import * as questionActions from 'actions/question'
import Question from 'components/Question'

class QuestionContainer extends React.Component {
  render() {
    return (
      <Question
        actions={ this.props.actions }
        question={ this.props.question }
        pushPath={ this.props.pushPath }
        onSubmit={ this.props.onSubmit }
      />
    )
  }
}

export default reduxify({
  component: QuestionContainer,
  reducer: 'question',
  actions: questionActions
})

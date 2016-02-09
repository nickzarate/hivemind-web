import React from 'react'
import questionSelector from 'selectors/question'
import * as questionActions from 'actions/question'
import Question from 'components/Question'
import reduxify from 'toolbox/reduxify'

class QuestionContainer extends React.Component {
  render() {
    return (
      <Question
        actions={ this.props.actions }
        question={ this.props.question }
        push={ this.props.push }
        onSubmit={ this.props.onSubmit }
        currentCategory={ this.props.currentCategory }
        outcomeName={ this.props.outcomeName }
      />
    )
  }
}

export default reduxify({
  selector: questionSelector,
  actions: questionActions,
  container: QuestionContainer
})

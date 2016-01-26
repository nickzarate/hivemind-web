import React from 'react'
import reduxify from 'toolbox/reduxify'
import * as questionActions from 'actions/question'
import Question from 'components/Question'

class QuestionContainer extends React.Component {
  render() {
    return (
      <Question
        actions={ this.props.actions }
        question={ this.props.question }
        push={ this.props.push }
        onSubmit={ this.props.onSubmit }
        currentCategory={ this.props.currentCategory }
      />
    )
  }
}

export default reduxify({
  component: QuestionContainer,
  state: 'question',
  actions: { questionActions }
})

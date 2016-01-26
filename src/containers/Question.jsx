import React from 'react'
import subscribe from 'selectors/questionSelector'
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

export default subscribe(QuestionContainer)

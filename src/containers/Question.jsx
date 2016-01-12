import React from 'react'
import { reduxify } from 'toolbox'
import { questionActions } from 'actions'
import QuestionComp from 'components/Question'

class Question extends React.Component {
  render() {
    return (
      <QuestionComp
        actions={ this.props.actions }
        question={ this.props.question }
        pushPath={ this.props.pushPath }
      />
    )
  }
}

export default reduxify({
  component: Question,
  reducer: 'question',
  actions: questionActions
})

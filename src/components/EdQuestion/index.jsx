import React, { PropTypes } from 'react'
import { questionActions } from 'actions'
import { reduxify, rand } from 'toolbox'
import Question from 'components/Question'

export class EdQuestion extends Question {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this)
    const { question } = this.props
    return (
      <div>
        <p>{ 'Hello!' }</p>
        <button onClick={ this.handleSubmit(question.remaining) }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

EdQuestion.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
}

export default reduxify({
  component: EdQuestion,
  reducer: 'question',
  actions: questionActions
})

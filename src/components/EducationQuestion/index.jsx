import React, { PropTypes } from 'react'
import { questionActions } from 'actions'
import { reduxify } from 'toolbox'
import Question from 'components/Question'

class EducationQuestion extends Question {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this)
    const { actions, question } = this.props
    return (
      <div>
        <p>{ 'Hello!' }</p>
        <p>{ 'Bank: ' }{ question.bank }</p>
        <p>{ 'years of experience: ' }{ question.abstractQuestion.x1 }</p>
        <p>{ 'years of education: ' }{ question.abstractQuestion.x2 }</p>
        <input
          onChange={ actions.handleEstimate }
          placeholder="ESTIMATE"
          ref="estimateInput"
        />
        <button onClick={ this.handleDeposit(0) }>{ question.abstractQuestion.answerText[0] }{ ': ' }{ question.answers[0] }</button>
        <button onClick={ this.handleDeposit(1) }>{ question.abstractQuestion.answerText[1] }{ ': ' }{ question.answers[1] }</button>
        <button onClick={ this.handleDeposit(2) }>{ question.abstractQuestion.answerText[2] }{ ': ' }{ question.answers[2] }</button>
        <button onClick={ this.handleDeposit(3) }>{ question.abstractQuestion.answerText[3] }{ ': ' }{ question.answers[3] }</button>
        <button onClick={ this.handleDeposit(4) }>{ question.abstractQuestion.answerText[4] }{ ': ' }{ question.answers[4] }</button>
        <button onClick={ this.handleDeposit(5) }>{ question.abstractQuestion.answerText[5] }{ ': ' }{ question.answers[5] }</button>
        <button onClick={ this.handleDeposit(6) }>{ question.abstractQuestion.answerText[6] }{ ': ' }{ question.answers[6] }</button>
        <button onClick={ this.handleDeposit(7) }>{ question.abstractQuestion.answerText[7] }{ ': ' }{ question.answers[7] }</button>
        <button onClick={ this.handleDeposit(8) }>{ question.abstractQuestion.answerText[8] }{ ': ' }{ question.answers[8] }</button>

        <button onClick={ this.handleSubmit(question.answers, question.estimate) }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

EducationQuestion.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
}

export default reduxify({
  component: EducationQuestion,
  reducer: 'question',
  actions: questionActions
})

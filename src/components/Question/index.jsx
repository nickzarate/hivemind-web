import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { defaultQuestionConfig } from 'assets'

export default class QuestionComp extends React.Component {

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.props.actions.pullQuestion(Parse)
  }

  handleDeposit(index) { return () => this.props.actions.handleDeposit(index) }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleSubmit(answers, pointEstimate) {
    return () => {
      const { actions } = this.props
      console.log("before this")
      console.log(this)
      this.props.onSubmit()
      this.refs.estimateInput.value = ''
      actions.resetBank()
      actions.pullQuestion(Parse)
    }
  }

  renderBins() {
    let bins = []
    if (this.props.question.currentQuestion) {
      console.log(defaultQuestionConfig.NUM_BINS)
      for (let i = 0; i < defaultQuestionConfig.NUM_BINS; i++) {
        bins.push(
          <li key={ i }>
            <button onClick={ this.handleDeposit(i) }>
              { this.props.question.currentQuestion.get('answerTexts')[i] }{ ': ' }{ this.props.question.answers[i] }
            </button>
          </li>
        )
      }
      return bins
    }
  }

  renderCovariates() {
    let covariates = []
    // for (let q in this.props.question.currentQuestion.get('covariates'))
    //   console.log('wazzap')
    if (this.props.question.currentQuestion) {
      for (let i = 0; i < this.props.question.currentQuestion.get('covariates').length; i++) {
        covariates.push(
          <li key={ i }>
            <p>{ 'x' }{ ': ' }{ this.props.question.currentQuestion.get('covariates')[i] }</p>
          </li>
        )
      }
      return covariates
    }
  }

  render() {
    console.log(this)
    const { question, actions } = this.props
    return (
      <div>
        <p>{ 'Bank: ' }{ question.bank }</p>
        { this.renderCovariates() }
        <input
          onChange={ actions.handleEstimate }
          placeholder="ESTIMATE"
          ref="estimateInput"
        />
        { this.renderBins() }
        <button onClick={ this.handleSubmit(question.answers, question.pointEstimate) }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

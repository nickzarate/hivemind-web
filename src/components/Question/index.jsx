import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Question extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    const { actions } = this.props
    actions.reset()
    actions.pullQuestion(Parse)
  }

  handleDeposit(index) { return () => this.props.actions.handleDeposit(index) }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleSubmit() {
    return () => {
      this.props.onSubmit()
      //TODO: Fix this, deprecated
      this.refs.estimateInput.value = ''
      this.props.actions.reset()
      this.props.actions.pullQuestion(Parse)
    }
  }

  renderBins() {
    let bins = []
    if (this.props.question.currentQuestion) {
      for (let i = 0; i < default_question_config.NUM_BINS; i++) {
        bins.push(
          <li key={ i }>
            <button onClick={ this.handleDeposit(i) }>
              { this.props.question.currentQuestion.get('answerTexts')[i] }{ ': ' }{ this.props.question.bins[i] }
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
    if (this.props.question.currentQuestion) {
      for (let i in this.props.question.currentQuestion.get('covariates')) {
        covariates.push(
          <li key={ i }>
            <p>{ this.props.question.currentQuestion.get('covariateNames')[i] }{ ': ' }{ this.props.question.currentQuestion.get('covariates')[i] }</p>
          </li>
        )
      }
      return covariates
    }
  }

  render() {
    const { question, actions } = this.props
    return (
      <div>
        <p>{ 'Bank: ' }{ question.bank }</p>
        { this.renderCovariates() }
        <input
          onChange={ actions.handleEstimate }
          placeholder="POINT ESTIMATE"
          ref="estimateInput"
        />
        { this.renderBins() }
        <button onClick={ this.handleSubmit() }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { defaultQuestionConfig } from 'assets'
import { reduxify } from 'toolbox'
import { questionActions } from 'actions'

class Question extends React.Component {

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.props.actions.pullQuestion(Parse)
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
        actions.pullQuestion(Parse)
      }
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
        <p>{ 'Hello!' }</p>
        <p>{ 'Stuff' }</p>
        <p>{ 'Bank: ' }{ question.bank }</p>
        { this.renderCovariates() }
        <input
          onChange={ actions.handleEstimate }
          placeholder="ESTIMATE"
          ref="estimateInput"
        />
        { this.renderBins() }
        <button onClick={ this.handleSubmit(question.answers, question.estimate) }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

export default reduxify({
  component: Question,
  reducer: 'question',
  actions: questionActions
})

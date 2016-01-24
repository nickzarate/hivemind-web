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
    const { question, currentCategory } = this.props
    if (question.currentQuestion) {
      return currentCategory.get('binText').map(
        (text, index) => (
          <li key={ index }>
            <button onClick={ this.handleDeposit(index) }>
              { text }{ ': ' }{ question.bins[index] }
            </button>
          </li>
        )
      )
    }
  }

  renderCovariates() {
    const { question, currentCategory } = this.props
    if (question.currentQuestion) {
      return question.currentQuestion.get('covariateValues').map(
        (covariate, index) => (
          <li key={ index }>
            <p>{ currentCategory.get('covariateNames')[index] }{ ': ' }{ covariate }</p>
          </li>
        )
      )
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

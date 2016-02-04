import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import Covariates from './Covariates'
import Bins from './Bins'

export default class Question extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeposit = this.handleDeposit.bind(this)
  }

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    const { actions } = this.props
    actions.reset()
    actions.pullQuestion(Parse)
  }

  handleDeposit(index) { return () => this.props.actions.handleDeposit(index) }

  push(path) {
    return () => this.props.push(path)
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

  render() {
    const { question, actions, currentCategory } = this.props
    return (
      <div>
        <p>{ 'Bank: ' }{ question.bank }</p>
        <Covariates
          question={ question }
          currentCategory={ currentCategory }
        />
        <input
          onChange={ actions.handleEstimate }
          placeholder="POINT ESTIMATE"
          ref="estimateInput"
        />
        <Bins
          question={ question }
          currentCategory={ currentCategory }
          onDeposit={ this.handleDeposit }
        />
        <button onClick={ this.handleSubmit() }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

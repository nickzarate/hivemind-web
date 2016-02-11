import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import Bins from './Bins'
import Description from './Description'
import EstimateForm from './EstimateForm'

export default class Question extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeposit = this.handleDeposit.bind(this)
  }

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentDidMount() {
    if (!Parse.User.current()) { this.props.push('/') }
    this.props.actions.reset()
    this.props.actions.pullQuestion(Parse)
  }

  handleDeposit(index) {
    return () => this.props.actions.handleDeposit(index)
  }

  push(path) {
    return () => this.props.push(path)
  }

  handleSubmit() {
    return () => {
      this.props.onSubmit()
      this.props.actions.reset()
      this.props.actions.pullQuestion(Parse)
    }
  }

  renderBins() {
    return (
      <div>
        <Bins
          question={ this.props.question }
          currentCategory={ this.props.currentCategory }
          onDeposit={ this.handleDeposit }
        />
        <button onClick={ this.handleSubmit() }>{ 'Submit Question' }</button>
      </div>
    )
  }

  render() {
    const { question, actions, currentCategory, outcomeName } = this.props
    return (
      <div>
        <Description
          question={ question }
          currentCategory={ currentCategory }
        />
        <EstimateForm
          onSubmit={ actions.handleEstimates }
          outcomeName={ outcomeName }
        />
        { this.renderBins() }
      </div>
    )
  }
}

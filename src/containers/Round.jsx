import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import reduxify from 'store/reduxify'
import { asyncCreateRound, asyncHandleSubmit, asyncAwardPoints,
  initializeQuestion, pullQuestion } from 'actions/round'
import { setMessage, setTarget } from 'actions/tooltip'
import roundSelector from 'selectors/round'

class Round extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { actions, bank, numBins } = this.props
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    actions.asyncCreateRound(Parse)
    actions.pullQuestion(Parse, this.props.categoryName)
    actions.initializeQuestion(numBins, bank)
  }

  handleSubmit() {
    const { actions, push, categoryName, numBins, bank } = this.props
    // Validate estimates
    for (let outcomeName of this.props.outcomeNames) {
      if (isNaN(this.props.estimates[outcomeName])) {
        this.props.actions.setMessage('Make a guess!')
        this.props.actions.setTarget(outcomeName)
        return
      }
    }
    actions.asyncHandleSubmit(Parse, push)
    actions.asyncAwardPoints(Parse)
    actions.initializeQuestion(numBins, bank)
    actions.pullQuestion(Parse, categoryName)
  }

  render() {
    return (
      <div>
        { React.cloneElement(this.props.children) }
        <button onClick={ this.handleSubmit }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

export default reduxify({
  selector: roundSelector,
  actions: { asyncHandleSubmit, asyncAwardPoints, asyncCreateRound,
    pullQuestion, initializeQuestion, setMessage, setTarget },
  container: Round
})

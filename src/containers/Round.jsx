import React from 'react'
import connect from 'store/connect'
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
    actions.asyncCreateRound()
    actions.pullQuestion(this.props.categoryName)
    actions.initializeQuestion(numBins, bank)
  }

  handleSubmit() {
    const { actions, categoryName, numBins, bank } = this.props
    // Validate estimates
    for (let outcomeName of this.props.outcomeNames) {
      if (isNaN(this.props.estimates[outcomeName])) {
        this.props.actions.setMessage('Make a guess!')
        this.props.actions.setTarget(outcomeName)
        return
      }
    }
    actions.asyncHandleSubmit()
    actions.asyncAwardPoints(this.props.worth)
    actions.initializeQuestion(numBins, bank)
    actions.pullQuestion(categoryName)
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

export default connect({
  selector: roundSelector,
  actions: { asyncHandleSubmit, asyncAwardPoints, asyncCreateRound,
    pullQuestion, initializeQuestion, setMessage, setTarget }
})(Round)

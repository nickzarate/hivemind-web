import React from 'react'
import reduxify from 'store/reduxify'
import { asyncCreateRound, asyncHandleSubmit, asyncAwardPoints,
  initializeQuestion, pullQuestion } from 'actions/round'
import { setTooltipMessage, setTooltipTarget } from 'actions/tooltip'
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
        this.props.actions.setTooltipMessage('Make a guess!')
        this.props.actions.setTooltipTarget(outcomeName)
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

export default reduxify({
  selector: roundSelector,
  actions: { asyncHandleSubmit, asyncAwardPoints, asyncCreateRound,
    pullQuestion, initializeQuestion, setTooltipMessage, setTooltipTarget },
  container: Round
})

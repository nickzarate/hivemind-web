import React from 'react'
import connect from 'store/connect'
import { asyncCreateRound, asyncHandleSubmit, asyncAwardPoints,
  initializeQuestion, pullQuestion } from 'actions/round'
import { setTooltipMessage, setTooltipTarget } from 'reducers/tooltip'
import roundSelector from 'selectors/round'

class Round extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { actions } = this.props
    actions.asyncCreateRound()
    actions.pullQuestion(this.props.categoryName)
    // actions.initializeQuestion(numBins, bank)
  }

  handleSubmit() {
    const { actions, categoryName } = this.props
    actions.asyncHandleSubmit(this.props.worth)
    // actions.asyncAwardPoints(this.props.worth)
    // actions.initializeQuestion(numBins, bank)
    actions.pullQuestion(categoryName)
  }

  render() {
    return (
      <div>
        { this.props.children }
        <button onClick={ this.handleSubmit }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

export default connect({
  selector: roundSelector,
  actions: { asyncHandleSubmit, asyncAwardPoints, asyncCreateRound,
    pullQuestion, initializeQuestion, setTooltipMessage, setTooltipTarget }
})(Round)

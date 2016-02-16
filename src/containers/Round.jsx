import React from 'react'
import Parse from 'parse'
import roundSelector from 'selectors/round'
import { asyncCreateRound, asyncHandleSubmit, asyncAwardPoints,
  initializeQuestion, pullQuestion } from 'actions/round'
import reduxify from 'toolbox/reduxify'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

class Round extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    const { actions, bank, numBins } = this.props
    if (!Parse.User.current()) {
      this.props.push('/home')
    }
    actions.asyncCreateRound(Parse)
    actions.pullQuestion(Parse, this.props.categoryName)
    actions.initializeQuestion(numBins, bank)
  }

  handleSubmit() {
    const { actions, push, categoryName, numBins, bank } = this.props
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
    pullQuestion, initializeQuestion },
  container: Round
})

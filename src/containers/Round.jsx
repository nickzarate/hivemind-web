import React from 'react'
import Parse from 'parse'
import roundSelector from 'selectors/round'
import { asyncCreateRound, asyncHandleSubmit, asyncAwardPoints } from 'actions/round'
import { pullQuestion, reset } from 'actions/question'
import reduxify from 'toolbox/reduxify'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

class Round extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    if (!this.props.currentCategory || !Parse.User.current()) {
      this.props.push('/home')
    }
    this.props.actions.asyncCreateRound(Parse)
    this.props.actions.pullQuestion(Parse, this.props.categoryName)
  }

  handleSubmit() {
    const { actions, push, categoryName } = this.props
    actions.asyncHandleSubmit(Parse, push)
    actions.asyncAwardPoints(Parse)
    actions.reset(this.props.bank)
    actions.pullQuestion(Parse, categoryName)
  }

  render() {
    let RouteHandler = React.cloneElement(this.props.children, { onSubmit: this.handleSubmit })
    return (
      <div onSubmit={ this.handleSubmit }>
        { RouteHandler }
      </div>
    )
  }
}

export default reduxify({
  selector: roundSelector,
  actions: { asyncHandleSubmit, asyncAwardPoints, asyncCreateRound, pullQuestion, reset },
  container: Round
})

import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Round extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.props.actions.asyncCreateRound(Parse)
    this.props.actions.getNumQuestions()
  }

  handleSubmit() {
    this.props.actions.asyncHandleSubmit(Parse, this.props.push)
    this.props.actions.asyncAwardPoints()
  }

  push(path) {
    return () => {
      this.props.push(path)
    }
  }

  render() {
    const childProps = {
      onSubmit: this.handleSubmit,
      push: this.push(),
      currentCategory: this.props.round.questionInfo.currentCategory
    }
    const RouteHandler = React.cloneElement(this.props.children, childProps)
    return (
      <div>
        { RouteHandler }
      </div>
    )
  }
}

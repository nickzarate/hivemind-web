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
  }

  componentDidMount() {
    if (!this.props.round.currentCategory || !Parse.User.current()) {
      this.props.push('/home')
    } else {
      this.props.actions.asyncCreateRound(Parse)
    }
  }

  handleSubmit() {
    this.props.actions.asyncHandleSubmit(Parse, this.props.push)
    this.props.actions.asyncAwardPoints(Parse)
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
      currentCategory: this.props.round.currentCategory
    }
    let RouteHandler = null
    if (childProps.currentCategory) {
      RouteHandler = React.cloneElement(this.props.children, childProps)
    }
    return (
      <div>
        { RouteHandler }
      </div>
    )
  }
}

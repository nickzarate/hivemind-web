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
  }

  handleSubmit() {
    const { actions } = this.props
    actions.asyncHandleSubmit(Parse, this.props.pushPath)
    actions.asyncAwardPoints()
  }

  pushPath(path) {
    return () => {
      this.props.pushPath(path)
    }
  }

  render() {
    const childProps = {
      onSubmit: this.handleSubmit,
      pushPath: this.pushPath()
    }
    const RouteHandler = React.cloneElement(this.props.children, childProps)
    return (
      <div>
        { RouteHandler }
      </div>
    )
  }
}

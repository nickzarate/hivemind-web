import React, { PropTypes } from 'react'
import { reduxify } from 'toolbox'
import { roundActions } from 'actions'

export default class Round extends React.Component {
  handleSubmit() {
    this.props.actions.decrementRemainingQuestions
    if (this.props.round.numQuestions) {
      this.props.pushPath(this.props.round.questionType)
    } else {
      this.props.pushPath(this.props.round.homePath)
    }
  }

  render() {
    const childProps = {
      onSubmit: this.handleSubmit
    }
    const RouteHandler = React.cloneElement(this.props.children, childProps)
    return (
      <div>
        { RouteHandler }
      </div>
    )
  }
}

Round.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  round: PropTypes.object.isRequired
}

export default reduxify({
  component: Round,
  reducer: 'round',
  actions: roundActions
})

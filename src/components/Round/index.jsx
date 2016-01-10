import React, { PropTypes } from 'react'
import { reduxify, merge } from 'toolbox'
import { answerActions, roundActions } from 'actions'
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
    actions.incrementCurrentQuestion()
  }

  pushPath(path) {
    return () => {
      this.props.pushPath(path)
    }
  }

  render() {
    console.log(this)
    const childProps = {
      onSubmit: this.handleSubmit,
      questionType: this.props.round.questionType,
      pushPath: this.pushPath(),
      isSubmitting: this.props.round.isSubmitting
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
  children: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  round: PropTypes.object.isRequired
}

export default reduxify({
  component: Round,
  reducer: 'round',
  actions: merge(answerActions, roundActions)
})

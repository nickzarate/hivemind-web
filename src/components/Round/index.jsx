import React, { PropTypes } from 'react'
import { reduxify } from 'toolbox'
import { roundActions } from 'actions'

export default class Round extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(answers, estimate) {
    const { actions, round, pushPath } = this.props

    //STORE INFORMATION AS VECTORS
    actions.addAnswers(answers)
    actions.addEstimate(estimate)

    actions.incrementCurrentQuestion()
    if (round.numQuestions < round.currentQuestion) {
      //TODO: Call Python server to analyze the data collected.
      console.log(round.answersVector)
      console.log(round.estimateVector)
      pushPath('/stats')
    }
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

Round.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  round: PropTypes.object.isRequired
}

export default reduxify({
  component: Round,
  reducer: 'round',
  actions: roundActions
})

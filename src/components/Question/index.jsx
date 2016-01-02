import React, { PropTypes } from 'react'
import { questionActions } from 'actions'
import { reduxify } from 'toolbox'

export default class Question extends React.Component {
  constructor(props) {
    super(props)
  }

  placeCube(index) {
    this.props.question.withdraw
    this.props.question.deposit(index)
  }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  render() {
    return (
      <div>
        <p>{ 'Hello!' }</p>
      </div>
    )
  }
}

Question.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
}

export default reduxify({
  component: Question,
  reducer: 'question',
  actions: questionActions
})

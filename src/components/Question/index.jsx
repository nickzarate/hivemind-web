import React, { PropTypes } from 'react'

export default class Question extends React.Component {

  handleDeposit(index) { return () => this.props.actions.handleDeposit(index) }

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
  onEstimate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pushPath: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  questionType: PropTypes.string.isRequired
}

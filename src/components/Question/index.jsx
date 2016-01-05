import React, { PropTypes } from 'react'

export default class Question extends React.Component {

  handleDeposit(index) {
    return () => {
      if (this.props.question.bank) {
        this.props.actions.withdraw()
        this.props.actions.deposit(index)
      }
    }
  }

  handleEstimate = (event) => {
    let estimate = Number(event.target.value)
    this.props.actions.estimate(estimate)
  };

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  render() {
    //console.log(this)
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

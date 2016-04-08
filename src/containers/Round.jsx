import React from 'react'
import connect from 'store/connect'
import { saveRound, asyncHandleSubmit, fetchQuestion } from 'actions/round'
import { resetAnswers } from 'actions/answers'
import { actions } from 'react-redux-form'
import roundSelector from 'selectors/round'
import Round from 'components/Round'

class RoundContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.actions.saveRound()
    this.props.actions.fetchQuestion()
  }

  handleSubmit() {
    this.props.actions.asyncHandleSubmit(this.props.answers)
  }

  render() {
    return (
      <Round onSubmit={ this.handleSubmit }>
        { this.props.children }
      </Round>
    )
  }
}

export default connect({
  selector: roundSelector,
  actions: { asyncHandleSubmit, saveRound, fetchQuestion, reset: actions.reset, resetAnswers }
})(RoundContainer)

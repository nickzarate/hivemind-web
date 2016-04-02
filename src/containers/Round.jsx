import React from 'react'
import connect from 'store/connect'
import { saveRound, asyncHandleSubmit, fetchQuestion, initializeQuestion } from 'actions/round'
import { actions } from 'react-redux-form'
import roundSelector from 'selectors/round'

class Round extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { actions } = this.props
    actions.saveRound()
    actions.fetchQuestion(this.props.categoryName)
  }

  handleSubmit() {
    this.props.actions.asyncHandleSubmit(this.props.worth)
    this.props.actions.reset('forms.estimates')
    this.props.actions.initializeQuestion(this.props.numBins, this.props.bank)
  }

  render() {
    return (
      <div>
        { this.props.children }
        <button onClick={ this.handleSubmit }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

export default connect({
  selector: roundSelector,
  actions: { asyncHandleSubmit, saveRound, fetchQuestion, reset: actions.reset, initializeQuestion }
})(Round)

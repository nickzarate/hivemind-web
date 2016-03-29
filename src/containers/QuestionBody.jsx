import React from 'react'
import connect from 'store/connect'
import QuestionBody from 'components/QuestionBody'
import { resetTooltip } from 'reducers/tooltip'
import { showModal } from 'reducers/modal'
import estimatesFormSelector from 'selectors/forms/estimates'

class QuestionBodyContainer extends React.Component {
  constructor() {
    super()
    this.handleHide = this.handleHide.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // this.props.actions.initializeQuestion(this.props.numBins, this.props.bank)
  }

  componentDidUnmount() {
    // this.props.actions.reset('forms.estimates')
  }

  handleHide() { this.props.actions.resetTooltip() }
  handleClick() { this.props.actions.showModal(true) }

  render() {
    return (
      <QuestionBody
        outcomeNames={ this.props.outcomeNames }
        estimates={ this.props.estimates }
        tooltipMessage={ this.props.tooltipMessage }
        tooltipTarget={ this.props.tooltipTarget }
        onHide={ this.handleHide }
        onClick={ this.handleClick }
        questionInstructions={ this.props.questionInstructions }
        outcomeDataTypes={ this.props.outcomeDataTypes }
      />
    )
  }
}

export default connect({
  selector: estimatesFormSelector,
  actions: { resetTooltip, showModal }
})(QuestionBodyContainer)

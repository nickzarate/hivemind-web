import React from 'react'
import connect from 'store/connect'
import QuestionBody from 'components/QuestionBody'
import { resetTooltip } from 'actions/tooltip'
import { showModal } from 'actions/modal'
import estimatesFormSelector from 'selectors/forms/estimates'

class QuestionBodyContainer extends React.Component {
  handleHide = () => this.props.actions.resetTooltip();
  handleClick = () => this.props.actions.showModal(true);

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

import React from 'react'
import connect from 'store/connect'
import QuestionBody from 'components/QuestionBody'
import { resetTooltip } from 'actions/tooltip'
import { showModal } from 'actions/modal'
import estimatesSelector from 'selectors/forms/estimates'

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
      />
    )
  }
}

export default connect({
  selector: estimatesSelector,
  actions: { resetTooltip, showModal }
})(QuestionBodyContainer)

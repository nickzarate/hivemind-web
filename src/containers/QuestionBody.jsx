import React from 'react'
import reduxify from 'store/reduxify'
import QuestionBody from 'components/QuestionBody'
import { resetTooltip } from 'reducers/tooltip'
import { showModal } from 'reducers/modal'
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

export default reduxify({
  selector: estimatesSelector,
  actions: { resetTooltip, showModal },
  container: QuestionBodyContainer
})

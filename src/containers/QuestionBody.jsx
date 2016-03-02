import React from 'react'
import reduxify from 'store/reduxify'
import QuestionBody from 'components/QuestionBody'
import { resetTooltip } from 'actions/tooltip'
import estimatesSelector from 'selectors/forms/estimates'

class QuestionBodyContainer extends React.Component {
  handleHide = () => this.props.actions.resetTooltip();

  render() {
    return (
      <QuestionBody
        outcomeNames={ this.props.outcomeNames }
        estimates={ this.props.estimates }
        tooltipMessage={ this.props.tooltipMessage }
        tooltipTarget={ this.props.tooltipTarget }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: estimatesSelector,
  actions: { resetTooltip },
  container: QuestionBodyContainer
})

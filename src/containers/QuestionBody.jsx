import React from 'react'
import connect from 'store/connect'
import QuestionBody from 'components/QuestionBody'
import { resetTooltip } from 'reducers/tooltip'
import { showModal } from 'reducers/modal'
import { useToken } from 'actions/answers'
import estimatesFormSelector from 'selectors/forms/estimates'

class QuestionBodyContainer extends React.Component {
  constructor() {
    super()
    this.handleHide = this.handleHide.bind(this)
    this.handleShowRange = this.handleShowRange.bind(this)
    this.handleBinClick = this.handleBinClick.bind(this)
  }

  handleHide() {
    this.props.actions.resetTooltip()
  }

  handleShowRange() {
    this.props.actions.showModal(true)
  }

  handleBinClick(index, i) {
    this.props.actions.useToken(index, i)
  }

  render() {
    return (
      <QuestionBody
        outcomes={ this.props.outcomes }
        estimates={ this.props.estimates }
        tooltip={ this.props.tooltip }
        onHide={ this.handleHide }
        onShowRange={ this.handleShowRange }
        onBinClick={ this.handleBinClick }
        answers={ this.props.answers }
      />
    )
  }
}

export default connect({
  selector: estimatesFormSelector,
  actions: { resetTooltip, showModal, useToken }
})(QuestionBodyContainer)

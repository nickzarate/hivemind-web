import React from 'react'
import connect from 'store/connect'
import RangePreview from 'components/RangePreview'
import { initializeQuestion } from 'actions/round'
import rangePreviewSelector from 'selectors/rangePreview'

class RangePreviewContainer extends React.Component {
  componentDidMount() {
    this.props.actions.initializeQuestion(this.props.numBins, this.props.bank)
  }

  render() {
    return (
      <RangePreview
        outcomeNames={ this.props.outcomeNames }
        discrete={ this.props.discrete }
        tooltipMessage={ this.props.tooltipMessage }
        tooltipTarget={ this.props.tooltipTarget }
      />
    )
  }
}

export default connect({
  selector: rangePreviewSelector,
  actions: { initializeQuestion }
})(RangePreviewContainer)

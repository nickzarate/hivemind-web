import React from 'react'
import connect from 'store/connect'
import RangePreview from 'components/RangePreview'
import { resetAnswers } from 'actions/answers'
import rangePreviewSelector from 'selectors/rangePreview'

class RangePreviewContainer extends React.Component {
  render() {
    return (
      <RangePreview
        outcomes={ this.props.outcomes }
        answers={ this.props.answers }
        tooltip={ this.props.tooltip }
      />
    )
  }
}

export default connect({
  selector: rangePreviewSelector,
  actions: { resetAnswers }
})(RangePreviewContainer)

import React from 'react'
import connect from 'store/connect'
import RangeForm from 'components/Forms/RangeForm'
import { resetTooltip } from 'actions/tooltip'
import rangeFormSelector from 'selectors/forms/range'

class RangeFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.resetTooltip()
  }

  render() {
    const { ranges, outcomeName } = this.props
    return (
      <RangeForm
        lowerValue={ ranges[outcomeName] ? ranges[outcomeName].lower : '' }
        upperValue={ ranges[outcomeName] ? ranges[outcomeName].upper : '' }
        outcomeName={ outcomeName }
      />
    )
  }
}

export default connect({
  selector: rangeFormSelector,
  actions: { resetTooltip }
})(RangeFormContainer)

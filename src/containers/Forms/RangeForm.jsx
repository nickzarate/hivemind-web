import React from 'react'
import connect from 'store/connect'
import RangeForm from 'components/Forms/RangeForm'
import rangeFormSelector from 'selectors/forms/range'

class RangeFormContainer extends React.Component {
  render() {
    const { ranges, variableName } = this.props
    return (
      <RangeForm
        lowerValue={ ranges[variableName] ? ranges[variableName].lower : '' }
        upperValue={ ranges[variableName] ? ranges[variableName].upper : '' }
        variableName={ variableName }
      />
    )
  }
}

export default connect({
  selector: rangeFormSelector
})(RangeFormContainer)

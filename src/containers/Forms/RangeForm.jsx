import React from 'react'
import reduxify from 'store/reduxify'
import RangeForm from 'components/Forms/RangeForm'
import { resetTooltip } from 'reducers/tooltip'
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

export default reduxify({
  selector: rangeFormSelector,
  actions: { resetTooltip },
  container: RangeFormContainer
})

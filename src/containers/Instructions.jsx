import React from 'react'
import instructionsSelector from 'selectors/instructions'
import Instructions from 'components/Instructions'
import connect from 'store/connect'

class InstructionsContainer extends React.Component {
  render() {
    return (
      <Instructions
        covariateValues={ this.props.covariateValues }
        covariateNames={ this.props.covariateNames }
      />
    )
  }
}

export default connect({
  selector: instructionsSelector
})(InstructionsContainer)

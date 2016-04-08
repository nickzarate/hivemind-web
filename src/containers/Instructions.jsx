import React from 'react'
import instructionsSelector from 'selectors/instructions'
import Instructions from 'components/Instructions'
import connect from 'store/connect'

class InstructionsContainer extends React.Component {
  render() {
    return <Instructions covariates={ this.props.covariates } />
  }
}

export default connect({
  selector: instructionsSelector
})(InstructionsContainer)

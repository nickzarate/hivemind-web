import React from 'react'
import instructionsSelector from 'selectors/instructions'
import Instructions from 'components/Instructions'
import reduxify from 'store/reduxify'

class InstructionsContainer extends React.Component {
  render() {
    return (
      <Instructions
        covariateValues={ this.props.covariateValues }
        covariateNames={ this.props.covariateNames }
        instructions={ this.props.instructions }
      />
    )
  }
}

export default reduxify({
  selector: instructionsSelector,
  container: InstructionsContainer
})

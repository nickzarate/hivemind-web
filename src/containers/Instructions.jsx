import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { pullQuestion } from 'actions/question'
import instructionsSelector from 'selectors/instructions'
import Instructions from 'components/Instructions'
import reduxify from 'toolbox/reduxify'

class InstructionsContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.props.actions.pullQuestion(Parse, this.props.categoryName)
  }

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
  actions: { pullQuestion },
  container: InstructionsContainer
})

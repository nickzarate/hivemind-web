import React from 'react'
import { handleEstimates } from 'actions/question'
import estimatesSelector from 'selectors/estimates'
import Estimates from 'components/Estimates'
import reduxify from 'toolbox/reduxify'

class EstimatesContainer extends React.Component {

  handleSubmit = (data) => this.props.actions.handleEstimates(data);

  render() {
    return (
      <Estimates
        onSubmit={ this.handleSubmit }
        outcomeNames={ this.props.outcomeNames }
      />
    )
  }
}

export default reduxify({
  selector: estimatesSelector,
  actions: { handleEstimates },
  container: EstimatesContainer
})

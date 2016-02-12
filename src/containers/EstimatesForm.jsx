import React from 'react'
import estimatesSelector from 'selectors/estimates'
import InputForm from 'containers/InputForm'
import reduxify from 'toolbox/reduxify'

class EstimatesForm extends React.Component {
  render() {
    return (
      <InputForm
        types={ this.props.types }
        placeholders={ this.props.placeholders }
      />
    )
  }
}

export default reduxify({
  selector: estimatesSelector,
  container: EstimatesForm
})

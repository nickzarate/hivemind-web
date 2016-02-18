import React from 'react'
import estimatesSelector from 'selectors/estimates'
import InputForm from 'containers/InputForm'
import reduxify from 'toolbox/reduxify'

class EstimatesForm extends React.Component {
  static defaultProps = {
    formIndex: 0
  };

  render() {
    return (
      <InputForm
        types={ this.props.types[formIndex] }
        placeholders={ this.props.placeholders[formIndex] }
      />
    )
  }
}

export default reduxify({
  selector: estimatesSelector,
  container: EstimatesForm
})

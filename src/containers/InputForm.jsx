import React from 'react'
import * as formActions from 'actions/form'
import formSelector from 'selectors/form'
import InputForm from 'components/InputForm'
import reduxify from 'toolbox/reduxify'

class InputFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let values = Array(this.props.placeholders.length).fill('')
    this.props.actions.initializeValues(values)
  }

  componentWillUnmount() {
    this.props.actions.clearValues()
    this.props.actions.setErrorMessage(null)
  }

  handleChange () {
    return (event, index) => {
      this.props.actions.updateValue(event.target.value, index)
    }
  }

  render() {
    return (
      <InputForm
        onChange={ this.handleChange() }
        types={ this.props.types }
        placeholders={ this.props.placeholders }
        errorMessage={ this.props.errorMessage }
        values={ this.props.values }
      />
    )
  }
}

export default reduxify({
  selector: formSelector,
  actions: formActions,
  container: InputFormContainer
})

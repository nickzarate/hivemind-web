import React from 'react'
import * as formActions from 'actions/form'
import formSelector from 'selectors/form'
import InputForm from 'components/InputForm'
import reduxify from 'toolbox/reduxify'

class InputFormContainer extends React.Component {
  static defaultProps = {
    formIndex: 0,
    onChange: () => null
  };

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let values = Array(this.props.placeholders.length).fill('')
    this.props.actions.initializeForm(values)
  }

  componentWillUnmount() {
    if (this.props.formIndex === 0) {
      this.props.actions.clearValues()
      this.props.actions.clearErrors()
    }
  }

  handleChange () {
    return (event, index) => {
      this.props.actions.setValue(event.target.value, this.props.formIndex, index)
      this.props.onChange(event.target.value, this.props.formIndex, index)
    }
  }

  render() {
    return (
      <InputForm
        onChange={ this.handleChange() }
        types={ this.props.types }
        placeholders={ this.props.placeholders }
        errorMessage={ this.props.errorMessages[this.props.formIndex] }
        values={ this.props.values[this.props.formIndex] }
      />
    )
  }
}

export default reduxify({
  selector: formSelector,
  actions: formActions,
  container: InputFormContainer
})

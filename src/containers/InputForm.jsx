import React from 'react'
import * as formActions from 'actions/form'
import formSelector from 'selectors/form'
import InputForm from 'components/InputForm'
import reduxify from 'store/reduxify'

class InputFormContainer extends React.Component {
  static defaultProps = {
    formIndex: 0,
    onChange: () => null,
    onBlur: () => null,
    onFormChange: () => null
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
      this.props.onFormChange(this.props.formIndex)
    }
  }

  handleBlur = () => this.props.onBlur(this.props.formIndex);

  render() {
    const { values, formIndex } = this.props
    let value = formIndex < values.length ? values[formIndex] : values[0]
    return (
      <InputForm
        onChange={ this.handleChange() }
        onBlur={ this.handleBlur }
        types={ this.props.types }
        placeholders={ this.props.placeholders }
        errorMessage={ this.props.errorMessages[formIndex] }
        values={ value }
      />
    )
  }
}

export default reduxify({
  selector: formSelector,
  actions: formActions,
  container: InputFormContainer
})

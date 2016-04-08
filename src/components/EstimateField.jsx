import React from 'react'
import { Field } from 'react-redux-form'
import { toNum } from 'utilities/parser'

export default class EstimateField extends React.Component {
  render() {
    return (
      <Field
        model={ `forms.estimates.${ this.props.variableName }` }
        parser={ toNum }
        ref={ (ref) => this.form = ref }
      >
        <input
          type="number"
          placeholder={ this.props.displayName }
          value={ this.props.estimates[this.props.variableName] }
        />
      </Field>
    )
  }
}

import React from 'react'
import { Field } from 'react-redux-form'
import { toNum } from 'utils/parser'

export default class NumberField extends React.Component {
  render() {
    const { model, variableName } = this.props
    return (
      <Field
        model={ model }
        ref={ (ref) => this[variableName] = ref }
        parser={ toNum }
      >
        <input
          type="number"
          placeholder={ variableName }
        />
      </Field>
    )
  }
}

import React from 'react'
import { createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'
const Field = createFieldClass({
  'Input': controls.radio
})

export default class RadioField extends React.Component {
  render() {
    const { model, variableName, values, labels } = this.props
    return (
      <Field
        model={ model }
        ref={ (ref) => this[variableName] = ref }
      >
        <label>{ variableName }</label>
        { values.map(
          (value, index) => (
            <Input
              key={ index }
              type="radio"
              value={ value }
              label={ labels ? labels[index] : value }
              active
            />
          )
        ) }
      </Field>
    )
  }
}
